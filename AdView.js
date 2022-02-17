export function buildAdView(ads) {
  let adTemplate = `
    <div
    class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
    >
    <img
        class="lg:h-48 md:h-36 w-full object-cover object-center rounded"
        src="${ads.image}"
    />
    <div class="p-6">
        <h2
        class="tracking-widest text-sm title-font font-medium text-gray-400 mb-1 uppercase"
        >
        ${ads.name}
        </h2>
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
        ${ads.price}€
        </h1>
        <p class="leading-relaxed mb-3 text-ellipsis overflow-hidden h-40">${ads.description}</p>
        <div class="flex items-center flex-wrap">
        <a
            href="./detail-ad.html"
            class="text-yellow-600 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer hover:text-yellow-500"
            >See More
            <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
            </svg>
        </a>
        <span
            class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
        >
            <svg
            class="w-4 h-4 mr-1"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
            >
            <path
                d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
            ></path>
            <circle cx="12" cy="12" r="3"></circle></svg
            >${ads.like}K
        </span>
        <span
            class="text-gray-400 inline-flex items-center leading-none text-sm uppercase"
        >
            ${ads.AdType}
        </span>
        </div>
    </div>
    </div>
    `;

  return adTemplate;
}
