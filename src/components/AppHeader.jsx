export default function AppHeader({ children }) {
  return (
    <header>
      <div className="logo">
        <h3 className="p-2">Rick & Morty</h3>
      </div>
      {children}
    </header>
  )
}