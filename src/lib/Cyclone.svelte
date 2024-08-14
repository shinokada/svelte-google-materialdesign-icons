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

  export let ariaLabel = 'cyclone';
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
      d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
    /><path
      d="M22 7.47V5.35C20.05 4.77 16.56 4 12 4c-2.15 0-4.11.86-5.54 2.24.13-.85.4-2.4 1.01-4.24H5.35C4.77 3.95 4 7.44 4 12c0 2.15.86 4.11 2.24 5.54-.85-.14-2.4-.4-4.24-1.01v2.12C3.95 19.23 7.44 20 12 20c2.15 0 4.11-.86 5.54-2.24-.14.85-.4 2.4-1.01 4.24h2.12c.58-1.95 1.35-5.44 1.35-10 0-2.15-.86-4.11-2.24-5.54.85.13 2.4.4 4.24 1.01zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
    />
  {:else if variation === 'filled'}
    <path
      d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
    /><path
      d="M22 7.47V5.35C20.05 4.77 16.56 4 12 4c-2.15 0-4.11.86-5.54 2.24.13-.85.4-2.4 1.01-4.24H5.35C4.77 3.95 4 7.44 4 12c0 2.15.86 4.11 2.24 5.54-.85-.14-2.4-.4-4.24-1.01v2.12C3.95 19.23 7.44 20 12 20c2.15 0 4.11-.86 5.54-2.24-.14.85-.4 2.4-1.01 4.24h2.12c.58-1.95 1.35-5.44 1.35-10 0-2.15-.86-4.11-2.24-5.54.85.13 2.4.4 4.24 1.01zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
    />
  {:else if variation === 'round'}
    <path
      d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
    /><path
      d="M22 6.11c0-.46-.3-.86-.74-.97C19.23 4.6 16.03 4 12 4c-2.15 0-4.11.86-5.54 2.24.1-.65.28-1.69.62-2.96.17-.64-.3-1.28-.97-1.28-.45 0-.85.3-.97.74C4.6 4.77 4 7.97 4 12c0 2.15.86 4.11 2.24 5.54-.65-.1-1.69-.28-2.96-.62-.64-.17-1.28.3-1.28.97 0 .46.3.86.74.97C4.77 19.4 7.97 20 12 20c2.15 0 4.11-.86 5.54-2.24-.1.65-.28 1.69-.62 2.96-.17.64.3 1.28.97 1.28.46 0 .86-.3.97-.74C19.4 19.23 20 16.03 20 12c0-2.15-.86-4.11-2.24-5.54.65.1 1.69.28 2.96.62.64.17 1.28-.3 1.28-.97zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
    /><path
      d="M22 7.47V5.35C20.05 4.77 16.56 4 12 4c-2.15 0-4.11.86-5.54 2.24.13-.85.4-2.4 1.01-4.24H5.35C4.77 3.95 4 7.44 4 12c0 2.15.86 4.11 2.24 5.54-.85-.14-2.4-.4-4.24-1.01v2.12C3.95 19.23 7.44 20 12 20c2.15 0 4.11-.86 5.54-2.24-.14.85-.4 2.4-1.01 4.24h2.12c.58-1.95 1.35-5.44 1.35-10 0-2.15-.86-4.11-2.24-5.54.85.13 2.4.4 4.24 1.01zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
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
@prop export let ariaLabel = 'cyclone';
-->
