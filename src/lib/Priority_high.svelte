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

export let ariaLabel="priority high";
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
    <circle cx="12" cy="19" r="2"/><path d="M10 3h4v12h-4z"/>
  {:else if variation === 'filled'}
    <circle cx="12" cy="19" r="2"/><path d="M10 3h4v12h-4z"/>
  {:else if variation === 'round'}
    <circle cx="12" cy="19" r="2"/><path d="M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
  {:else if variation === 'sharp'}
    <circle cx="12" cy="19" r="2"/><path d="M10 3h4v12h-4z"/>
  {:else if variation === 'two-tone'}
    <circle cx="12" cy="19" r="2"/><path d="M10 3h4v12h-4z"/>
  {/if}
</svg>