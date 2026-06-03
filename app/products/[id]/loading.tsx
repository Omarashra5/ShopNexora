export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black">

      <div className="container mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="aspect-square animate-pulse bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-[length:200%_100%]" />
          </div>

          {/* Content */}
          <div className="space-y-6">

            <div className="h-5 w-32 rounded-full bg-slate-800 animate-pulse" />

            <div className="h-14 w-full rounded-xl bg-slate-800 animate-pulse" />

            <div className="space-y-3">
              <div className="h-4 rounded bg-slate-800 animate-pulse" />
              <div className="h-4 rounded bg-slate-800 animate-pulse" />
              <div className="h-4 w-4/5 rounded bg-slate-800 animate-pulse" />
            </div>

            <div className="h-12 w-40 rounded-xl bg-slate-800 animate-pulse" />

            <div className="flex gap-4">
              <div className="h-14 w-40 rounded-2xl bg-slate-800 animate-pulse" />
              <div className="h-14 w-40 rounded-2xl bg-slate-800 animate-pulse" />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}