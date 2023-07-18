import { c as create_ssr_component, v as validate_component, h as escape, i as each, m as missing_component } from "../../../chunks/ssr.js";
import { I as Icons, T as TableSearch, L as Label, R as Range, a as Tabs, b as TabItem } from "../../../chunks/index2.js";
const contentClass = " rounded-lg dark:bg-slate-950 mt-4";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredEntries;
  const random_tailwind_color = () => {
    const colors = ["red", "yellow", "green", "blue", "indigo", "purple", "pink"];
    const shades = ["300", "400", "500"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomShade = shades[Math.floor(Math.random() * shades.length)];
    return `text-${randomColor}-${randomShade} dark:text-${randomColor}-${randomShade} shrink-0`;
  };
  const random_hex_color_code = () => {
    let n = (Math.random() * 1048575 * 1e6).toString(16);
    return "#" + n.slice(0, 6);
  };
  let searchTerm = "";
  let size = "24";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    filteredEntries = Object.entries(Icons).filter(([name, component]) => {
      return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    });
    $$rendered = `<h1 data-svelte-h="svelte-hf1ltz">Svelte Google Materialdesign Icons: Round</h1> ${validate_component(TableSearch, "TableSearch").$$render(
      $$result,
      {
        placeholder: "Search by icon name",
        hoverable: true,
        divClass: "relative overflow-x-auto",
        inputValue: searchTerm
      },
      {
        inputValue: ($$value) => {
          searchTerm = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="xl:w-1/3 lg:w-2/5 md:w-1/2 sm:w-3/4 w-full p-4">${validate_component(Label, "Label").$$render($$result, { class: "text-lg py-4 " }, {}, {
            default: () => {
              return `Icon size: ${escape(size)}`;
            }
          })} ${validate_component(Range, "Range").$$render(
            $$result,
            {
              id: "range1",
              min: "16",
              max: "50",
              value: size
            },
            {
              value: ($$value) => {
                size = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div> ${validate_component(Tabs, "Tabs").$$render(
            $$result,
            {
              style: "pill",
              contentClass,
              class: "p-4"
            },
            {},
            {
              default: () => {
                return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true }, {}, {
                  title: () => {
                    return `<span slot="title" class="text-lg" data-svelte-h="svelte-38190o">Mono</span>`;
                  },
                  default: () => {
                    return `<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white">${each(filteredEntries, ([name, component]) => {
                      return `<div class="flex gap-4 items-center text-lg">${validate_component(component || missing_component, "svelte:component").$$render(
                        $$result,
                        {
                          class: "shrink-0",
                          variation: "round",
                          size
                        },
                        {
                          size: ($$value) => {
                            size = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${escape(name)} </div>`;
                    })}</div>`;
                  }
                })} ${validate_component(TabItem, "TabItem").$$render($$result, {}, {}, {
                  title: () => {
                    return `<span slot="title" class="text-lg" data-svelte-h="svelte-10n0y8j">Random Hex Colors</span>`;
                  },
                  default: () => {
                    return `<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white">${each(filteredEntries, ([name, component]) => {
                      return `<div class="flex gap-4 items-center text-lg">${validate_component(component || missing_component, "svelte:component").$$render(
                        $$result,
                        {
                          color: random_hex_color_code(),
                          class: "shrink-0",
                          variation: "round",
                          size
                        },
                        {
                          size: ($$value) => {
                            size = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${escape(name)} </div>`;
                    })}</div>`;
                  }
                })} ${validate_component(TabItem, "TabItem").$$render($$result, {}, {}, {
                  title: () => {
                    return `<span slot="title" class="text-lg" data-svelte-h="svelte-uuf26f">Random Tailwind CSS Colors</span>`;
                  },
                  default: () => {
                    return `<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white">${each(filteredEntries, ([name, component]) => {
                      return `<div class="flex gap-4 items-center text-lg">${validate_component(component || missing_component, "svelte:component").$$render(
                        $$result,
                        {
                          class: random_tailwind_color(),
                          variation: "round",
                          size
                        },
                        {
                          size: ($$value) => {
                            size = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} ${escape(name)} </div>`;
                    })}</div>`;
                  }
                })}`;
              }
            }
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
