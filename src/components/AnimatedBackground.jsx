export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-600/20 to-blue-500/20 animate-bg" />
    </div>
  );
}
