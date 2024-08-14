<script lang="ts">
  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
    variation?: "filled" | "outlined" | "round" | "sharp" | "two-tone";
  }

  import { getContext } from 'svelte';
  const ctx: CtxType = getContext('iconCtx') ?? {};

  export let size: string = ctx.size || '24';
  export let role: string = ctx.role || 'img';
  export let color: string = ctx.color || 'currentColor';
  export let variation: "filled" | "outlined" | "round" | "sharp" | "two-tone" = ctx.variation || "outlined";

export let ariaLabel="tungsten";
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
    <path d="M11 19h2v3h-2zm-9-8h3v2H2zm17 0h3v2h-3zm-3.106 6.801 1.407-1.407 2.122 2.122-1.408 1.407zm-11.31.708 2.121-2.122 1.408 1.407-2.122 2.122zM15 8.02V3H9v5.02c-1.21.92-2 2.35-2 3.98 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.06-2-3.98zM11 5h2v2.1c-.32-.06-.66-.1-1-.1s-.68.04-1 .1V5zm1 10c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>
  {:else if variation === 'filled'}
    <path d="M11 19h2v3h-2zm-9-8h3v2H2zm17 0h3v2h-3zm-3.106 6.801 1.407-1.407 2.122 2.122-1.408 1.407zm-11.31.708 2.121-2.122 1.408 1.407-2.122 2.122zM15 8.02V3H9v5.02c-1.21.92-2 2.35-2 3.98 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.06-2-3.98zM11 5h2v2.1c-.32-.06-.66-.1-1-.1s-.68.04-1 .1V5z"/>
  {:else if variation === 'round'}
    <path d="M12 19c-.56 0-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-.55-.45-1-1-1zm-6.01-1.91-.71.71a.996.996 0 1 0 1.41 1.41l.71-.71a.996.996 0 0 0 0-1.41c-.38-.38-1.02-.38-1.41 0zM5 12c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1zm16-1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1zm-2.99 6.09a.996.996 0 1 0-1.41 1.41l.71.71a.996.996 0 1 0 1.41-1.41l-.71-.71zM15 8.02V5c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3.02c-1.43 1.08-2.28 2.9-1.91 4.91.36 1.95 1.9 3.55 3.84 3.95C14.16 17.56 17 15.11 17 12c0-1.63-.79-3.06-2-3.98zm-2-.92c-.32-.06-.66-.1-1-.1s-.68.04-1 .1V5h2v2.1z"/>
  {:else if variation === 'sharp'}
    <path d="M11 19h2v3h-2zm-9-8h3v2H2zm17 0h3v2h-3zm-3.106 6.801 1.407-1.407 2.122 2.122-1.408 1.407zm-11.31.708 2.121-2.122 1.408 1.407-2.122 2.122zM15 8.02V3H9v5.02c-1.21.92-2 2.35-2 3.98 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.06-2-3.98zM11 5h2v2.1c-.32-.06-.66-.1-1-.1s-.68.04-1 .1V5z"/>
  {:else if variation === 'two-tone'}
    <path d="M13 7.1V5h-2v2.1c.32-.06.66-.1 1-.1s.68.04 1 .1z" opacity=".3"/><path d="M11 19h2v3h-2zm-9-8h3v2H2zm17 0h3v2h-3zm-3.106 6.801 1.407-1.407 2.122 2.122-1.408 1.407zm-11.31.708 2.121-2.122 1.408 1.407-2.122 2.122zM15 8.02V3H9v5.02c-1.21.92-2 2.35-2 3.98 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.06-2-3.98zM11 5h2v2.1c-.32-.06-.66-.1-1-.1s-.68.04-1 .1V5zm1 10c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>
  {/if}
</svg>