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

  export let ariaLabel = 'blender';
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
      d="M16.13 15.13 18 3h-4V2h-4v1H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2.23l.64 4.13C6.74 16.05 6 17.43 6 19v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1c0-1.57-.74-2.95-1.87-3.87zM5 9V5h1.31l.62 4H5zm10.67-4-1.38 9H9.72L8.33 5h7.34zM16 20H8v-1c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3v1z"
    /><circle cx="12" cy="18" r="1" />
  {:else if variation === 'filled'}
    <path
      d="M16.13 15.13 18 3h-4V2h-4v1H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2.23l.64 4.13C6.74 16.05 6 17.43 6 19v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1c0-1.57-.74-2.95-1.87-3.87zM5 9V5h1.31l.62 4H5zm7 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.29-5H9.72L8.33 5h7.34l-1.38 9z"
    />
  {:else if variation === 'round'}
    <path
      d="m16.13 15.13 1.69-10.98c.1-.6-.37-1.15-.99-1.15H14c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2.23l.64 4.13C6.74 16.05 6 17.43 6 19v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1c0-1.57-.74-2.95-1.87-3.87zM5 9V5h1.31l.62 4H5zm7 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.29-5H9.72L8.33 5h7.34l-1.38 9z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M18 3h-4V2h-4v1H3v8h4.23l.64 4.13L6 17v5h12v-5l-1.87-1.87L18 3zM5 9V5h1.31l.62 4H5zm7 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.29-5H9.72L8.33 5h7.34l-1.38 9z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M13 16h-2c-1.65 0-3 1.35-3 3v1h8v-1c0-1.65-1.35-3-3-3zm-1 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
      opacity=".3"
    /><path
      d="M16.13 15.13 18 3h-4V2h-4v1H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2.23l.64 4.13C6.74 16.05 6 17.43 6 19v1c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1c0-1.57-.74-2.95-1.87-3.87zM5 9V5h1.31l.62 4H5zm10.67-4-1.38 9H9.72L8.33 5h7.34zM16 20H8v-1c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3v1z"
    /><circle cx="12" cy="18" r="1" />
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
@prop export let ariaLabel = 'blender';
-->
