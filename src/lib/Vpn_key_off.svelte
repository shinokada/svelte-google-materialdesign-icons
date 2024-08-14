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

export let ariaLabel="vpn key off";
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
    <path d="M2.81 2.81 1.39 4.22l2.59 2.59A6.012 6.012 0 0 0 1 12c0 3.31 2.69 6 6 6 2.22 0 4.15-1.21 5.19-3l7.59 7.61 1.41-1.41L2.81 2.81zM7 16c-2.21 0-4-1.79-4-4 0-1.67 1.02-3.1 2.47-3.7l1.71 1.71C7.12 10 7.06 10 7 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.06 0-.12-.01-.18l1.74 1.74C10.22 14.48 9.14 16 7 16zm10-1.83V13h-1.17L17 14.17zM13.83 11H21v2h-2v3l2 2v-3h2V9H11.83l2 2z"/>
  {:else if variation === 'filled'}
    <path d="M20.83 18H21v-4h2v-4H12.83l8 8zm-1.05 4.61 1.41-1.41L2.81 2.81 1.39 4.22l2.59 2.59A6.012 6.012 0 0 0 1 12c0 3.31 2.69 6 6 6 2.21 0 4.15-1.2 5.18-2.99l7.6 7.6zM8.99 11.82c.01.06.01.12.01.18 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.06 0 .12 0 .18.01l1.81 1.81z"/>
  {:else if variation === 'round'}
    <path d="M3.98 6.81A6.012 6.012 0 0 0 1 12c0 3.31 2.69 6 6 6 2.21 0 4.15-1.2 5.18-2.99l6.89 6.89a.996.996 0 1 0 1.41-1.41L3.51 3.51A.996.996 0 1 0 2.1 4.92l1.88 1.89zm5.01 5.01c.01.06.01.12.01.18 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.06 0 .12 0 .18.01l1.81 1.81zm11.33 5.68c.42-.37.68-.91.68-1.5v-2c1.1 0 2-.9 2-2s-.9-2-2-2h-8.17l7.49 7.5"/>
  {:else if variation === 'sharp'}
    <path d="M20.83 18H21v-4h2v-4H12.83l8 8zm-1.05 4.61 1.41-1.41L2.81 2.81 1.39 4.22l2.59 2.59A6.012 6.012 0 0 0 1 12c0 3.31 2.69 6 6 6 2.21 0 4.15-1.2 5.18-2.99l7.6 7.6zM8.99 11.82c.01.06.01.12.01.18 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.06 0 .12 0 .18.01l1.81 1.81z"/>
  {:else if variation === 'two-tone'}
    <path d="M17 14.17V13h-1.17l-2-2H21v2h-2v3l-2-1.83zM7 16c-2.21 0-4-1.79-4-4 0-1.67 1.02-3.1 2.47-3.7l1.71 1.71C7.12 10 7.06 10 7 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.06 0-.12-.01-.18l1.74 1.74C10.22 14.48 9.14 16 7 16z" opacity=".3"/><path d="M2.81 2.81 1.39 4.22l2.59 2.59A6.012 6.012 0 0 0 1 12c0 3.31 2.69 6 6 6 2.22 0 4.15-1.21 5.19-3l7.59 7.61 1.41-1.41L2.81 2.81zM7 16c-2.21 0-4-1.79-4-4 0-1.67 1.02-3.1 2.47-3.7l1.71 1.71C7.12 10 7.06 10 7 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.06 0-.12-.01-.18l1.74 1.74C10.22 14.48 9.14 16 7 16zm10-1.83V13h-1.17L17 14.17zM13.83 11H21v2h-2v3l2 2v-3h2V9H11.83l2 2z"/>
  {/if}
</svg>