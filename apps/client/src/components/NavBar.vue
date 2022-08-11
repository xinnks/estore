<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { MenuIcon, ShoppingBagIcon, XIcon } from "@heroicons/vue/outline";

const route = useRoute();
const navigation = {
  categories: [
    {
      id: 1,
      name: "Accessories",
    },
    {
      id: 2,
      name: "Shoes",
    },
    {
      id: 3,
      name: "Furniture",
    },
  ],
  pages: [
    { name: "Accessories", href: "/category/1" },
    { name: "Shoes", href: "/category/2" },
    { name: "Furniture", href: "/category/3" },
  ],
};

watch(route, () => {
  open.value = false;
});

const open = ref(false);
</script>

<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 flex z-40">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto"
            >
              <div class="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  @click="open = false"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div class="border-t border-gray-200 py-6 px-4 space-y-6">
                <div
                  v-for="page in navigation.pages"
                  :key="page.name"
                  class="flow-root"
                >
                  <router-link
                    :to="page.href"
                    class="-m-2 p-2 block font-medium text-gray-900"
                    >{{ page.name }}</router-link
                  >
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <header class="relative bg-white">
      <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="h-16 flex items-center">
            <button
              type="button"
              class="bg-white p-2 rounded-md text-gray-400 lg:hidden"
              @click="open = true"
            >
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Logo -->
            <div class="ml-4 flex lg:ml-0">
              <router-link to="/">
                <span class="sr-only">Workflow</span>
                <svg
                  class="h-10 w-10"
                  aria-hidden="true"
                  viewBox="0 0 256 256"
                  id="svg5"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:svg="http://www.w3.org/2000/svg"
                >
                  <title>estore</title>
                  <defs id="defs2">
                    <linearGradient
                      id="linearGradient4849"
                      inkscape:swatch="solid"
                    >
                      <stop
                        style="stop-color: #16aa9a; stop-opacity: 1"
                        offset="0"
                        id="stop4847"
                      />
                    </linearGradient>
                  </defs>
                  <g id="layer1" style="display: inline">
                    <path
                      id="rect846-4-0-2"
                      style="
                        display: inline;
                        fill: #16aa9a;
                        fill-opacity: 1;
                        stroke-width: 0.408228;
                        stop-color: #000000;
                      "
                      d="M 126.95814,8.7963623 C 117.11916,8.9054534 107.12399,10.240368 97.16151,12.909806 56.715927,23.747167 26.83348,53.909123 14.728817,90.785671 L 49.58612,87.754332 C 60.530178,66.431027 80.126781,49.659486 105.20805,42.93898 c 7.36311,-1.97294 14.75007,-2.960016 22.02191,-3.040639 28.04182,-0.31092 54.31624,12.900921 70.95846,34.931717 L 233.0912,71.794067 C 212.25308,32.604691 171.19003,8.305934 126.95814,8.7963623 Z"
                    />
                    <path
                      id="rect846-4"
                      style="
                        fill: #138e80;
                        fill-opacity: 1;
                        stroke-width: 1.54291;
                        stop-color: #000000;
                      "
                      d="m 847.77148,218.23633 -147.49804,12.82812 c 17.91425,15.3852 34.34751,32.64542 48.78515,51.75782 l 131.91602,-11.47461 c -9.90059,-18.61963 -21.01466,-36.34476 -33.20313,-53.11133 z m -621.26367,54.0332 -146.992185,12.7832 C 70.293154,303.8239 62.216841,323.17598 55.667969,343.12695 L 187.41211,331.66992 c 10.83979,-21.12015 23.97959,-41.01728 39.0957,-59.40039 z"
                      transform="scale(0.26458333)"
                    />
                    <path
                      id="rect846"
                      style="
                        display: inline;
                        fill: #00f1d6;
                        fill-opacity: 1;
                        stroke-width: 0.43855;
                        stop-color: #000000;
                      "
                      d="M 237.40515,61.346127 8.6340981,81.545926 C 3.0599065,95.934658 0,111.59617 0,127.99994 c 0,70.912 57.087939,127.99993 127.99994,127.99993 70.912,0 127.99993,-57.08793 127.99993,-127.99993 0,-24.45374 -6.79124,-47.262152 -18.59472,-66.653813 z"
                    />
                    <rect
                      style="
                        display: inline;
                        fill: #16aa9a;
                        fill-opacity: 1;
                        stroke-width: 0.264583;
                        stop-color: #000000;
                      "
                      id="rect13982"
                      width="112.50108"
                      height="27.88588"
                      x="74.669762"
                      y="92.363716"
                      ry="13.942939"
                    />
                    <rect
                      style="
                        display: inline;
                        fill: #16aa9a;
                        fill-opacity: 1;
                        stroke-width: 0.264583;
                        stop-color: #000000;
                      "
                      id="rect13982-8"
                      width="112.50108"
                      height="27.88588"
                      x="74.669762"
                      y="189.39824"
                      ry="13.942939"
                    />
                    <rect
                      style="
                        display: inline;
                        fill: #16aa9a;
                        fill-opacity: 1;
                        stroke-width: 0.208385;
                        stop-color: #000000;
                      "
                      id="rect13982-1"
                      width="83.735153"
                      height="27.88588"
                      x="74.669762"
                      y="140.59869"
                      ry="13.942939"
                    />
                    <rect
                      style="
                        display: inline;
                        fill: #14988a;
                        fill-opacity: 1;
                        stroke-width: 0.208385;
                        stop-color: #000000;
                      "
                      id="rect13982-1-5"
                      width="28.592224"
                      height="27.88588"
                      x="129.81268"
                      y="140.59869"
                      ry="12.812758"
                    />
                    <rect
                      style="
                        display: inline;
                        fill: #14988a;
                        fill-opacity: 1;
                        stroke-width: 0.208385;
                        stop-color: #000000;
                      "
                      id="rect13982-1-5-0"
                      width="28.592224"
                      height="27.88588"
                      x="158.57861"
                      y="92.363716"
                      ry="12.812758"
                    />
                    <rect
                      style="
                        display: inline;
                        fill: #14988a;
                        fill-opacity: 1;
                        stroke-width: 0.208385;
                        stop-color: #000000;
                      "
                      id="rect13982-1-5-6"
                      width="28.592224"
                      height="27.88588"
                      x="158.57861"
                      y="189.39824"
                      ry="12.812758"
                    />
                  </g>
                </svg>
              </router-link>
            </div>

            <!-- Flyout menus -->
            <PopoverGroup class="hidden lg:ml-8 lg:block lg:self-stretch">
              <div class="h-full flex space-x-8">
                <router-link
                  v-for="page in navigation.pages"
                  :key="page.name"
                  :to="page.href"
                  class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >{{ page.name }}</router-link
                >
              </div>
            </PopoverGroup>

            <div class="ml-auto flex items-center">
              <!-- Cart -->
              <div class="ml-4 flow-root lg:ml-6">
                <a href="#" class="group -m-2 p-2 flex items-center">
                  <ShoppingBagIcon
                    class="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span
                    class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                    >0</span
                  >
                  <span class="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>
