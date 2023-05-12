<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = "outlined";
  let svgpath: string;
  let svgfilled = '<path d="M23 8A7 7 0 0 0 9.68 5H7v2H4.5a1.5 1.5 0 0 0-1.42 1.01L1 14v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-7.68A7.01 7.01 0 0 0 23 8zm-18.5.5h4.53a6.93 6.93 0 0 0 2.08 4.5H3l1.5-4.5zm0 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.93-5.63-.21.11-.18.09a4.97 4.97 0 0 1-.42.16l-.22.07-.23.06-.2.05a5 5 0 0 1-5.94-4.41A4.07 4.07 0 0 1 11 8l.02-.47.02-.17.04-.28.04-.21.05-.21.07-.24.05-.13a4.99 4.99 0 0 1 9.69 1.7 4.96 4.96 0 0 1-2.55 4.38zM15 4h2v5h-2zm0 6h2v2h-2z"/>';
  let svgoutlined = '<circle cx="6.5" cy="15.5" r="1.5"/><circle cx="15.5" cy="15.5" r="1.5"/><path d="M18 13v5H4v-5h14c-1.91 0-3.63-.76-4.89-2h-8.3l1.04-3h5.44C11.1 7.37 11 6.7 11 6s.1-1.37.29-2H8v2H5.5c-.66 0-1.21.42-1.42 1.01L2 13v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-.09-.27c-.61.17-1.25.27-1.91.27z"/><path d="M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm.5 8h-1V8h1v1zm0-2h-1V3h1v4z"/>';
  let svground = '<path d="M18 13c-1.91 0-3.63-.76-4.89-2h-8.3l1.04-3h5.44C11.1 7.37 11 6.7 11 6s.1-1.37.29-2H9c-.55 0-1 .45-1 1v1H5.5c-.66 0-1.21.42-1.42 1.01L2 13v7.5c0 .82.67 1.5 1.5 1.5S5 21.32 5 20.5V20h12v.5c0 .82.67 1.5 1.5 1.5s1.5-.68 1.5-1.5V13l-.09-.27c-.61.17-1.25.27-1.91.27zM6.5 17c-.83 0-1.5-.67-1.5-1.5S5.67 14 6.5 14s1.5.67 1.5 1.5S7.33 17 6.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm.5-2.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3z"/>';
  let svgsharp = '<path d="M18 13c-1.91 0-3.63-.76-4.89-2h-8.3l1.04-3h5.44C11.1 7.37 11 6.7 11 6s.1-1.37.29-2H8v2H4.43L2 13v9h3v-2h12v2h3v-9l-.09-.27c-.61.17-1.25.27-1.91.27zM6.5 17c-.83 0-1.5-.67-1.5-1.5S5.67 14 6.5 14s1.5.67 1.5 1.5S7.33 17 6.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm.5 8h-1V8h1v1zm0-2h-1V3h1v4z"/>';
  let svgtwotone = '<path d="M4 18h14v-5H4v5zm11.5-4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-9 0c.83 0 1.5.67 1.5 1.5S7.33 17 6.5 17 5 16.33 5 15.5 5.67 14 6.5 14z" opacity=".3"/><circle cx="6.5" cy="15.5" r="1.5"/><circle cx="15.5" cy="15.5" r="1.5"/><path d="M18 18H4v-5h14c-1.91 0-3.63-.76-4.89-2h-8.3l1.04-3h5.44C11.1 7.37 11 6.7 11 6s.1-1.37.29-2H8v2H5.5c-.66 0-1.21.42-1.42 1.01L2 13v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-.09-.27c-.61.17-1.25.27-1.91.27v5z"/><path d="M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm.5 2v4h-1V3h1zm0 6h-1V8h1v1z"/>';
  switch (variation) {
    case "filled":
      svgpath = svgfilled;
      break;
    case "outlined":
      svgpath = svgoutlined;
      break;
    case "round":
      svgpath = svground;
      break;
    case "sharp":
      svgpath = svgsharp;
      break;
    case "two-tone":
      svgpath = svgtwotone;
      break;
    default:
      svgpath = svgoutlined;
  }
export let ariaLabel="taxi alert";
 </script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
  width={size}
  height={size}
  fill={color}
  class={$$props.class}
  aria-label={ariaLabel}
  viewBox="0 0 24 24"
  on:click 
  on:mouseenter 
  on:mouseleave 
  on:mouseover 
  on:mouseout 
  on:blur 
  on:focus 
>
  {@html svgpath}
</svg>
