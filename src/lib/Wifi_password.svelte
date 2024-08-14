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

  export let ariaLabel = 'wifi password';
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
      d="m24 8.98-2.12 2.13C19.35 8.57 15.85 7 12 7s-7.35 1.57-9.88 4.11L0 8.98C3.07 5.9 7.31 4 12 4s8.93 1.9 12 4.98zM4.24 13.22l2.12 2.12A7.967 7.967 0 0 1 12 13c2.2 0 4.2.9 5.64 2.35l2.12-2.12C17.78 11.23 15.03 10 12 10c-3.03 0-5.78 1.23-7.76 3.22zM24 20v3c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1v-1c0-1.1.9-2 2-2s2 .9 2 2v1c.55 0 1 .45 1 1zm-2-2c0-.55-.45-1-1-1s-1 .45-1 1v1h2v-1zm-10-2c-1.38 0-2.63.56-3.53 1.46L12 21l3.53-3.54A4.98 4.98 0 0 0 12 16z"
    />
  {:else if variation === 'filled'}
    <path
      d="M23 19v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1zm2-10.02-2.12 2.13C19.35 8.57 15.85 7 12 7s-7.35 1.57-9.88 4.11L0 8.98C3.07 5.9 7.31 4 12 4s8.93 1.9 12 4.98zM12 10c3.03 0 5.78 1.23 7.76 3.22l-2.12 2.12A7.967 7.967 0 0 0 12 13c-2.2 0-4.2.9-5.64 2.35l-2.12-2.12C6.22 11.23 8.97 10 12 10zm3.53 7.46L12 21l-3.53-3.54c.9-.9 2.15-1.46 3.53-1.46s2.63.56 3.53 1.46z"
    />
  {:else if variation === 'round'}
    <path
      d="M18.49 12.13A10.899 10.899 0 0 0 12 10c-2.43 0-4.67.79-6.49 2.13-.72.53-.76 1.6-.13 2.24.53.54 1.37.57 1.98.12A7.925 7.925 0 0 1 12 13c1.73 0 3.33.55 4.64 1.49.62.44 1.45.41 1.98-.12.64-.64.6-1.71-.13-2.24zm4.31-4.24C19.86 5.46 16.1 4 12 4S4.14 5.46 1.2 7.89c-.67.55-.71 1.58-.09 2.21.55.55 1.42.58 2.02.09a13.927 13.927 0 0 1 17.74 0c.6.49 1.47.46 2.02-.09.62-.63.58-1.66-.09-2.21zM12 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm11 3v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z"
    />
  {:else if variation === 'sharp'}
    <path
      d="m24 8.98-2.12 2.13C19.35 8.57 15.85 7 12 7s-7.35 1.57-9.88 4.11L0 8.98C3.07 5.9 7.31 4 12 4s8.93 1.9 12 4.98zM4.24 13.22l2.12 2.12A7.967 7.967 0 0 1 12 13c2.2 0 4.2.9 5.64 2.35l2.12-2.12C17.78 11.23 15.03 10 12 10c-3.03 0-5.78 1.23-7.76 3.22zM24 19v5h-6v-5h1v-1c0-1.1.9-2 2-2s2 .9 2 2v1h1zm-2-1c0-.55-.45-1-1-1s-1 .45-1 1v1h2v-1zm-10-2c-1.38 0-2.63.56-3.53 1.46L12 21l3.53-3.54A4.98 4.98 0 0 0 12 16z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="m24 8.98-2.12 2.13C19.35 8.57 15.85 7 12 7s-7.35 1.57-9.88 4.11L0 8.98C3.07 5.9 7.31 4 12 4s8.93 1.9 12 4.98zM24 20v3c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1v-1c0-1.1.9-2 2-2s2 .9 2 2v1c.55 0 1 .45 1 1zm-2-2c0-.55-.45-1-1-1s-1 .45-1 1v1h2v-1zM4.24 13.22l2.12 2.12A7.967 7.967 0 0 1 12 13c2.2 0 4.2.9 5.64 2.35l2.12-2.12C17.78 11.23 15.03 10 12 10c-3.03 0-5.78 1.23-7.76 3.22zM12 16c-1.38 0-2.63.56-3.53 1.46L12 21l3.53-3.54A4.98 4.98 0 0 0 12 16z"
    />
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
@prop export let ariaLabel = 'wifi password';
-->
