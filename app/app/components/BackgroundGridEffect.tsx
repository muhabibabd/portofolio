"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseAlpha: number
  pulseSpeed: number
  pulseOffset: number
}

interface Ripple {
  x: number
  y: number
  radius: number
  maxRadius: number
  alpha: number
}

export default function BackgroundGridEffect() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    let mouseX = -1000
    let mouseY = -1000
    let targetMouseX = -1000
    let targetMouseY = -1000
    let isMouseActive = false

    const ripples: Ripple[] = []

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      initNodes()
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX
      targetMouseY = e.clientY
      isMouseActive = true
    }

    const handleMouseLeave = () => {
      targetMouseX = -1000
      targetMouseY = -1000
      isMouseActive = false
    }

    const handleClick = (e: MouseEvent) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 180,
        alpha: 0.5,
      })
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("click", handleClick, { passive: true })

    // Active nodes count: denser so they connect gracefully
    let nodes: Node[] = []
    const initNodes = () => {
      nodes = []
      const count = Math.min(130, Math.max(65, Math.floor((width * height) / 13000)))
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.95,
          vy: (Math.random() - 0.5) * 0.95,
          radius: Math.random() * 1.5 + 1.5,
          baseAlpha: Math.random() * 0.35 + 0.25,
          pulseSpeed: Math.random() * 0.03 + 0.015,
          pulseOffset: Math.random() * Math.PI * 2,
        })
      }
    }

    initNodes()

    const gridSpacing = 56
    const connectionDistance = 160
    const mouseConnectionDistance = 210
    let time = 0

    const render = () => {
      time += 0.01

      // Responsive mouse interpolation
      if (targetMouseX > -500) {
        mouseX += (targetMouseX - mouseX) * 0.15
        mouseY += (targetMouseY - mouseY) * 0.15
      } else {
        mouseX = -1000
        mouseY = -1000
      }

      ctx.clearRect(0, 0, width, height)

      // 1. Draw subtle architectural coordinate grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)"
      ctx.lineWidth = 1

      ctx.beginPath()
      for (let x = 0; x <= width; x += gridSpacing) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
      }
      for (let y = 0; y <= height; y += gridSpacing) {
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
      }
      ctx.stroke()

      // 2. Draw technical crosshairs (+) at grid intersections
      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)"
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let x = gridSpacing; x < width; x += gridSpacing * 2) {
        for (let y = gridSpacing; y < height; y += gridSpacing * 2) {
          ctx.moveTo(x - 4, y)
          ctx.lineTo(x + 4, y)
          ctx.moveTo(x, y - 4)
          ctx.lineTo(x, y + 4)
        }
      }
      ctx.stroke()

      // 3. Update & render click ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const ripple = ripples[r]
        ripple.radius += 5.5
        ripple.alpha *= 0.94

        ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.alpha.toFixed(3)})`
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2)
        ctx.stroke()

        // Push nodes away from ripple center
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i]
          const dx = node.x - ripple.x
          const dy = node.y - ripple.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (Math.abs(dist - ripple.radius) < 35 && dist > 1) {
            const push = (1 - Math.abs(dist - ripple.radius) / 35) * 3
            node.x += (dx / dist) * push
            node.y += (dy / dist) * push
          }
        }

        if (ripple.alpha < 0.02 || ripple.radius >= ripple.maxRadius) {
          ripples.splice(r, 1)
        }
      }

      // 4. Update nodes physics
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        node.x += node.vx
        node.y += node.vy

        // Wrap edges smoothly
        if (node.x < -15) node.x = width + 15
        if (node.x > width + 15) node.x = -15
        if (node.y < -15) node.y = height + 15
        if (node.y > height + 15) node.y = -15

        // Interactive mouse gravity & repulsion
        let distToMouse = 9999
        if (mouseX > -500) {
          const mdx = node.x - mouseX
          const mdy = node.y - mouseY
          distToMouse = Math.sqrt(mdx * mdx + mdy * mdy)

          if (distToMouse < 180 && distToMouse > 5) {
            // Slight magnetic orbital drag
            const force = (1 - distToMouse / 180) * 1.4
            node.x += (mdx / distToMouse) * force * 0.8
            node.y += (mdy / distToMouse) * force * 0.8
          }
        }

        // Breathing alpha pulse
        const pulse = Math.sin(time * 3 + node.pulseOffset) * 0.15
        let currentAlpha = Math.max(0.15, node.baseAlpha + pulse)

        if (distToMouse < 180) {
          currentAlpha = Math.min(1, currentAlpha + (1 - distToMouse / 180) * 0.6)
        }

        // Draw node dot
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha.toFixed(3)})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()

        // 5. Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j]
          const dx = node.x - other.x
          const dy = node.y - other.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            let lineAlpha = (1 - dist / connectionDistance) * 0.22

            // Brighten lines if near cursor
            if (distToMouse < 180) {
              lineAlpha = Math.min(0.55, lineAlpha + 0.18)
            }

            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha.toFixed(3)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }

        // 6. Connect cursor to nodes within range (ACTIVE INTERACTION WEB)
        if (mouseX > -500 && distToMouse < mouseConnectionDistance) {
          const cursorLineAlpha = (1 - distToMouse / mouseConnectionDistance) * 0.45
          ctx.strokeStyle = `rgba(255, 255, 255, ${cursorLineAlpha.toFixed(3)})`
          ctx.lineWidth = 1.2
          ctx.beginPath()
          ctx.moveTo(mouseX, mouseY)
          ctx.lineTo(node.x, node.y)
          ctx.stroke()
        }
      }

      // 7. Interactive cursor HUD target & spotlight
      if (mouseX > -500) {
        // Spotlight gradient
        const spotlight = ctx.createRadialGradient(
          mouseX,
          mouseY,
          0,
          mouseX,
          mouseY,
          320
        )
        spotlight.addColorStop(0, "rgba(255, 255, 255, 0.09)")
        spotlight.addColorStop(0.35, "rgba(255, 255, 255, 0.03)")
        spotlight.addColorStop(1, "rgba(0, 0, 0, 0)")
        ctx.fillStyle = spotlight
        ctx.fillRect(0, 0, width, height)

        // Tiny cursor center dot & pulsing reticle
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, 2.5, 0, Math.PI * 2)
        ctx.fill()

        const reticleRadius = 16 + Math.sin(time * 6) * 2
        ctx.strokeStyle = "rgba(255, 255, 255, 0.25)"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, reticleRadius, 0, Math.PI * 2)
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("click", handleClick)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Dynamic ambient breathing dark gradients */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full blur-[140px] opacity-45 pointer-events-none animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(55, 65, 90, 0.5) 0%, rgba(10, 10, 10, 0) 70%)",
          animationDuration: "8s",
        }}
      />
      <div
        className="absolute top-[35%] -right-[15%] w-[65vw] h-[65vw] rounded-full blur-[150px] opacity-40 pointer-events-none animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(70, 85, 115, 0.42) 0%, rgba(10, 10, 10, 0) 70%)",
          animationDuration: "11s",
        }}
      />
      {/* Interactive dynamic canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}
