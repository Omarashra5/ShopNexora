export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black">

      <div className="container mx-auto px-6 py-10">

        {/* Hero */}
        <div className="mb-12">
          <div className="h-14 w-96 rounded-2xl bg-slate-800 animate-pulse mb-4" />

          <div className="h-5 w-[500px] rounded bg-slate-800 animate-pulse" />
        </div>

        {/* Search */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 mb-10">

          <div className="h-14 rounded-2xl bg-slate-800 animate-pulse mb-5" />

          <div className="flex flex-wrap gap-3">
            {Array.from({ length: 7 }).map(
              (_, i) => (
                <div
                  key={i}
                  className="h-12 w-28 rounded-2xl bg-slate-800 animate-pulse"
                />
              )
            )}
          </div>

        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {Array.from({ length: 12 }).map(
            (_, i) => (
              <div
                key={i}
                className="
                  rounded-3xl
                  overflow-hidden
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                "
              >
                <div className="h-64 bg-slate-800 animate-pulse" />

                <div className="p-5">

                  <div className="h-4 w-24 rounded bg-slate-800 animate-pulse mb-4" />

                  <div className="h-6 rounded bg-slate-800 animate-pulse mb-3" />

                  <div className="h-6 w-2/3 rounded bg-slate-800 animate-pulse mb-6" />

                  <div className="flex justify-between items-center">

                    <div className="h-8 w-24 rounded bg-slate-800 animate-pulse" />

                    <div className="h-10 w-10 rounded-full bg-slate-800 animate-pulse" />

                  </div>

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}