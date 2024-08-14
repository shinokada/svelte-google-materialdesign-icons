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

export let ariaLabel="signal cellular null";
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
    <path d="M20 6.83V20H6.83L20 6.83M22 2 2 22h20V2z"/>
  {:else if variation === 'filled'}
    <path d="M20 6.83V20H6.83L20 6.83M22 2 2 22h20V2z"/>
  {:else if variation === 'round'}
    <path d="M20 6.83V19c0 .55-.45 1-1 1H6.83L20 6.83m.29-3.12L3.71 20.29c-.63.63-.19 1.71.7 1.71H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.33-1.71-.7z"/>
  {:else if variation === 'sharp'}
    <path d="M20 6.83V20H6.83L20 6.83M22 2 2 22h20V2z"/>
  {:else if variation === 'two-tone'}
    <path d="M20 6.83V20H6.83L20 6.83M22 2 2 22h20V2z"/>
  {/if}
</svg>