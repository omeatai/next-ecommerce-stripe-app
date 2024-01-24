export default function ({ user }) {
  return <span>| Welcome, {user || "Visitor"}!</span>;
}
