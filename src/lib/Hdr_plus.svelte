<script lang="ts">
  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
    variation?: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone';
  }

  import { getContext } from 'svelte';
  const ctx: CtxType = getContext('iconCtx') ?? {};

  export let size: string = ctx.size || '24';
  export let role: string = ctx.role || 'img';
  export let color: string = ctx.color || 'currentColor';
  export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' =
    ctx.variation || 'outlined';

  export let ariaLabel = 'hdr plus';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  aria-label={ariaLabel}
  viewBox="0 0 24 24"
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
>
  {#if variation === 'outlined'}
    <path
      d="M8.13 19c1.15.64 2.47 1 3.87 1 4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8c0 2.52 1.17 4.77 3 6.24V13h3.5c.8 0 1.5.7 1.5 1.5v1c0 .6-.4 1.1-.9 1.4L12 19h-1.5l-.9-2H8.5v2h-.37zM12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm5.5 14H16v1.5h-1.5V16H13v-1.5h1.5V13H16v1.49h1.5V16zm-7-.5v-1h-2v1h2zm0-7.5V6H12v6h-1.5V9.5h-2V12H7V6h1.5v2h2zM16 6c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5h-3V6h3zm0 4.5v-3h-1.5v3H16z"
    />
  {:else if variation === 'filled'}
    <path d="M8.5 14.5h2v1h-2zm6-7H16v3h-1.5z" /><path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13.5c0 .6-.4 1.1-.9 1.4L12 19h-1.5l-.9-2H8.5v2H7v-6h3.5c.8 0 1.5.7 1.5 1.5v1zm0-3.5h-1.5V9.5h-2V12H7V6h1.5v2h2V6H12v6zm5.5 4H16v1.5h-1.5V16H13v-1.5h1.5V13H16v1.49h1.5V16zm0-5.5c0 .8-.7 1.5-1.5 1.5h-3V6h3c.8 0 1.5.7 1.5 1.5v3z"
    />
  {:else if variation === 'round'}
    <path d="M8.5 14.5h2v1h-2zm6-7H16v3h-1.5z" /><path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13.5c0 .6-.4 1.1-.9 1.4l.49 1.13c.2.46-.14.97-.64.97a.69.69 0 0 1-.63-.41L9.6 17H8.5v1.31c0 .38-.31.69-.69.69h-.12c-.38 0-.69-.31-.69-.69V14c0-.55.45-1 1-1h2.5c.82 0 1.5.68 1.5 1.5v1zm-.75-3.5c-.41 0-.75-.34-.75-.75V9.5h-2v1.75c0 .41-.34.75-.75.75S7 11.66 7 11.25v-4.5c0-.41.34-.75.75-.75s.75.34.75.75V8h2V6.75c0-.41.34-.75.75-.75s.75.34.75.75v4.5c0 .41-.34.75-.75.75zm5.5 4H16v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V16h-.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.75v-.75c0-.41.34-.75.75-.75s.75.34.75.75v.74h.75c.41 0 .75.34.75.75v.01c0 .41-.34.75-.75.75zm.75-5.5c0 .82-.67 1.5-1.5 1.5h-2.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5H16c.83 0 1.5.68 1.5 1.5v3z"
    />
  {:else if variation === 'sharp'}
    <path d="M8.5 14.5h2v1h-2zm6-7H16v3h-1.5z" /><path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15-.86-.01L12 19h-1.5l-.9-2H8.5v2H7v-6h5v4zm0-5h-1.5V9.5h-2V12H7V6h1.5v2h2V6H12v6zm5.5 4H16v1.5h-1.5V16H13v-1.5h1.5V13H16v1.49h1.5V16zm0-5.5c0 .8-.7 1.5-1.5 1.5h-3V6h3c.8 0 1.5.7 1.5 1.5v3z"
    />
  {:else if variation === 'two-tone'}
    replace_svg_two
  {/if}
</svg>

<!--
@component
[Go to docs](https://svelte-google-materialdesign-icons.codewithshin.com)
## Props
@prop export let size: string = ctx.size || '24';
@prop export let role: string = ctx.role || 'img';
@prop export let color: string = ctx.color || 'currentColor';
@prop export let variation: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' =
    ctx.variation || 'outlined';
@prop export let ariaLabel = 'hdr plus';
-->
