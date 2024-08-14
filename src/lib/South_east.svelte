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

export let ariaLabel="south east";
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
    <path d="M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10V9z"/>
  {:else if variation === 'filled'}
    <path d="M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10V9z"/>
  {:else if variation === 'round'}
    <path d="M18 9c-.56 0-1 .45-1 1v5.59L6.12 4.7a.996.996 0 1 0-1.41 1.41L15.59 17H10c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1z"/>
  {:else if variation === 'sharp'}
    <path d="M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10V9z"/>
  {:else if variation === 'two-tone'}
    <path d="M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10V9z"/>
  {/if}
</svg>