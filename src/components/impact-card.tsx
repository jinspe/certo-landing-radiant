import { EyeIcon } from '@heroicons/react/16/solid'

export function ImpactCard() {
  return (
    <div className="mx-auto max-w-xl rounded-lg border border-gray-200 p-4">
      <div className="mb-4 text-sm font-medium text-gray-900">
        Change detected
      </div>

      {/* Linalool percentage increase card */}
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
        <div className="mb-3 text-sm font-medium text-gray-900">
          Linalool percentage increase
        </div>
        <div className="mb-1 flex items-center gap-2">
          <span className="text-base font-medium text-gray-900">+0.93%</span>
          <span className="text-sm text-gray-700">0.07% → 1.00%</span>
        </div>
        <div className="mb-4 text-sm text-gray-700">Increase in allergen</div>

        {/* 3 formula impacted card */}
        <div className="rounded border border-gray-300 p-3">
          <div className="mb-3 text-sm font-medium text-gray-900">
            3 formula impacted
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-sm">🟡</span>
              <span className="text-sm text-gray-700">2 new warning</span>
              <button className="ml-auto flex items-center gap-1 text-sm text-gray-700 underline hover:text-gray-900">
                <EyeIcon className="size-3" />
                View
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm">🔴</span>
              <span className="text-sm text-gray-700">
                1 product need relabeling
              </span>
              <button className="ml-auto flex items-center gap-1 text-sm text-gray-700 underline hover:text-gray-900">
                <EyeIcon className="size-3" />
                View
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate change card */}
      <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
        <div className="mb-3 text-sm font-medium text-gray-900">
          Certificate change
        </div>
        <div className="mb-1 flex items-center gap-2">
          <span className="text-base font-medium text-gray-900">Missing</span>
          <span className="text-sm text-gray-700">ISO 9001 → Required</span>
        </div>
        <div className="mb-4 text-sm text-gray-700">Missing certificate</div>

        {/* 2 products impacted card */}
        <div className="rounded border border-gray-300 p-3">
          <div className="mb-3 text-sm font-medium text-gray-900">
            2 products impacted
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-sm">🟡</span>
              <span className="text-sm text-gray-700">
                1 compliance warning
              </span>
              <button className="ml-auto flex items-center gap-1 text-sm text-gray-700 underline hover:text-gray-900">
                <EyeIcon className="size-3" />
                View
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm">🔴</span>
              <span className="text-sm text-gray-700">
                1 certificate renewal needed
              </span>
              <button className="ml-auto flex items-center gap-1 text-sm text-gray-700 underline hover:text-gray-900">
                <EyeIcon className="size-3" />
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
