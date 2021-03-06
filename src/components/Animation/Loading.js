export default function Loading() {
  return (
    <div className="mt-8 flex items-center justify-center space-x-2 animate-pulse">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-36 h-36 border-4 border-beereign_yellow border-solid rounded-full animate-spin"
      />
    </div>
  );
}
