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

export let ariaLabel="e mobiledata";
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
    <path d="M16 9V7H8v10h8v-2h-6v-2h6v-2h-6V9h6z"/>
  {:else if variation === 'filled'}
    <path d="M16 9V7H8v10h8v-2h-6v-2h6v-2h-6V9h6z"/>
  {:else if variation === 'round'}
    <path d="M16 8c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-5v-2h5c.55 0 1-.45 1-1s-.45-1-1-1h-5V9h5c.55 0 1-.45 1-1z"/>
  {:else if variation === 'sharp'}
    <path d="M16 9V7H8v10h8v-2h-6v-2h6v-2h-6V9h6z"/>
  {:else if variation === 'two-tone'}
    <path d="M16 9V7H8v10h8v-2h-6v-2h6v-2h-6V9h6z"/>
  {/if}
</svg>