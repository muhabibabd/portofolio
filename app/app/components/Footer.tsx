export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        background: "var(--invert-bg)",
        borderTop: "1px solid #d4d4d4",
      }}
    >
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "1.5rem clamp(20px, 4vw, 48px)",
        }}
      >
        <span
          className="font-mono text-xs"
          style={{ color: "var(--invert-muted)" }}
        >
          © {new Date().getFullYear()} Muhammad Habib Abdillah
        </span>
        <span
          className="font-mono text-xs"
          style={{ color: "var(--invert-muted)" }}
        >
          Dibangun dengan Next.js 16.
        </span>
      </div>
    </footer>
  )
}
