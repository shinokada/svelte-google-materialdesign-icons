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

export let ariaLabel="synagogue";
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
    <path d="M20 4c-1.66 0-3 1.34-3 3v.29L12 3 7 7.29V7c0-1.66-1.34-3-3-3S1 5.34 1 7v14h10v-5c0-.55.45-1 1-1s1 .45 1 1v5h10V7c0-1.66-1.34-3-3-3zm0 2c.55 0 1 .45 1 1v1h-2V7c0-.55.45-1 1-1zM4 6c.55 0 1 .45 1 1v1H3V7c0-.55.45-1 1-1zM3 19v-9h2v9H3zm14 0h-2v-3c0-1.65-1.35-3-3-3s-3 1.35-3 3v3H7V9.92l5-4.29 5 4.29V19zm2 0v-9h2v9h-2z"/><circle cx="12" cy="10" r="1.5"/>
  {:else if variation === 'filled'}
    <path d="M6 8v13h4v-5c0-1.1.9-2 2-2s2 .9 2 2v5h4V8l-6-5-6 5zm7.5 2c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM3 5c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2zM1 9h4v12H1zm20-4c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2zm-2 4h4v12h-4z"/>
  {:else if variation === 'round'}
    <path d="M6 8.94V21h4v-4.89c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 14 16v5h4V8.94a2 2 0 0 0-.72-1.54l-4-3.33c-.74-.62-1.82-.62-2.56 0l-4 3.33c-.46.38-.72.94-.72 1.54zM13.5 10c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM3 5c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2zm0 16h2V9H1v10c0 1.1.9 2 2 2zM21 5c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2zm-2 16h2c1.1 0 2-.9 2-2V9h-4v12z"/>
  {:else if variation === 'sharp'}
    <path d="M6 8v13h4v-7h4v7h4V8l-6-5-6 5zm7.5 2c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM3 5c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2zM1 9h4v12H1zm20-4c-1.1 0-2 .9-2 2v1h4V7c0-1.1-.9-2-2-2zm-2 4h4v12h-4z"/>
  {:else if variation === 'two-tone'}
    <path d="M4 6c-.55 0-1 .45-1 1v1h2V7c0-.55-.45-1-1-1zm-1 4h2v9H3zm4-.08V19h2v-3c0-1.65 1.35-3 3-3s3 1.35 3 3v3h2V9.92l-5-4.29-5 4.29zm6.5.08c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM20 6c-.55 0-1 .45-1 1v1h2V7c0-.55-.45-1-1-1zm-1 4h2v9h-2z" opacity=".3"/><path d="M20 4c-1.66 0-3 1.34-3 3v.29L12 3 7 7.29V7c0-1.66-1.34-3-3-3S1 5.34 1 7v14h10v-5c0-.55.45-1 1-1s1 .45 1 1v5h10V7c0-1.66-1.34-3-3-3zM5 19H3v-9h2v9zM5 8H3V7c0-.55.45-1 1-1s1 .45 1 1v1zm12 11h-2v-3c0-1.65-1.35-3-3-3s-3 1.35-3 3v3H7V9.92l5-4.29 5 4.29V19zm4 0h-2v-9h2v9zm0-11h-2V7c0-.55.45-1 1-1s1 .45 1 1v1z"/><circle cx="12" cy="10" r="1.5"/>
  {/if}
</svg>