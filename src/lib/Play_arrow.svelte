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

export let ariaLabel="play arrow";
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
    <path d="M10 8.64 15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/>
  {:else if variation === 'filled'}
    <path d="M8 5v14l11-7z"/>
  {:else if variation === 'round'}
    <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"/>
  {:else if variation === 'sharp'}
    <path d="M8 5v14l11-7L8 5z"/>
  {:else if variation === 'two-tone'}
    <path d="M10 8.64v6.72L15.27 12z" opacity=".3"/><path d="m8 19 11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z"/>
  {/if}
</svg>