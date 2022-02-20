export function buildAdView(ads) {
  let adTemplate = `
    <div
    class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
    >
    <a href="./detail-ad.html?id=${ads.id}">
        <img
            class="lg:h-48 md:h-36 w-full object-cover object-center rounded"
            src="${ads.image}"
        />
    </a>
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
            href="./detail-ad.html?id=${ads.id}"
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

export function buildAdDetailView(ads) {
  let adTemplate = `
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img
        alt="ecommerce"
        class="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
        src=${ads.image}
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2
            class="text-sm title-font text-gray-500 tracking-widest uppercase"
        >
            ${ads.AdType}
        </h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
            ${ads.name}
        </h1>
        <div class="flex mb-4">
            <span class="flex items-center">
            <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-yellow-500"
                viewBox="0 0 24 24"
            >
                <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
            </svg>
            <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-yellow-500"
                viewBox="0 0 24 24"
            >
                <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
            </svg>
            <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-yellow-500"
                viewBox="0 0 24 24"
            >
                <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
            </svg>
            <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-yellow-500"
                viewBox="0 0 24 24"
            >
                <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
            </svg>
            <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-yellow-500"
                viewBox="0 0 24 24"
            >
                <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
            </svg>
            <span class="text-gray-600 ml-3">${ads.like} Likes</span>
            </span>
            <span
            class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s"
            >
            <a class="text-gray-500">
                <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
                >
                <path
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                ></path>
                </svg>
            </a>
            <a class="text-gray-500">
                <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
                >
                <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                ></path>
                </svg>
            </a>
            <a class="text-gray-500">
                <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
                >
                <path
                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                ></path>
                </svg>
            </a>
            </span>
        </div>
        <p class="leading-relaxed">
            ${ads.description}
        </p>
        <div
            class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"
        ></div>
        <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900"
            >${ads.price}€</span
            >
            <a href="/"
            class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
            >
            Back to the list of ads
            </a>
            <button
            class="delete-product hidden rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-red-600 hover:text-white transition-all"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
                />
            </svg>
            </button>
        </div>
        </div>
    </div>
    `;

    return adTemplate;
}

export function buildNotFoundAdsView() {
  return `
    <p class="">En estos momentos no tenemos anuncios... Lo Sentimos</p>
    `;
}
