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

  export let ariaLabel = 'precision manufacturing';
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
      d="m19.93 8.35-3.6 1.68L14 7.7V6.3l2.33-2.33 3.6 1.68c.38.18.82.01 1-.36.18-.38.01-.82-.36-1l-3.92-1.83a.993.993 0 0 0-1.13.2L13.78 4.4A.975.975 0 0 0 13 4c-.55 0-1 .45-1 1v1H8.82C8.4 4.84 7.3 4 6 4 4.34 4 3 5.34 3 7c0 1.1.6 2.05 1.48 2.58L7.08 18H6c-1.1 0-2 .9-2 2v1h13v-1c0-1.1-.9-2-2-2h-1.62L8.41 8.77c.17-.24.31-.49.41-.77H12v1c0 .55.45 1 1 1 .32 0 .6-.16.78-.4l1.74 1.74c.3.3.75.38 1.13.2l3.92-1.83c.38-.18.54-.62.36-1a.753.753 0 0 0-1-.36zM6 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5.11 10H9.17l-2.46-8h.1l4.3 8z"
    />
  {:else if variation === 'filled'}
    <path
      d="m19.93 8.21-3.6 1.68L14 7.7V6.3l2.33-2.19 3.6 1.68c.38.18.82.01 1-.36.18-.38.01-.82-.36-1L16.65 2.6a.993.993 0 0 0-1.13.2l-1.74 1.6A.975.975 0 0 0 13 4c-.55 0-1 .45-1 1v1H8.82C8.34 4.65 6.98 3.73 5.4 4.07c-1.16.25-2.15 1.25-2.36 2.43-.22 1.32.46 2.47 1.48 3.08L7.08 18H4v3h13v-3h-3.62L8.41 8.77c.17-.24.31-.49.41-.77H12v1c0 .55.45 1 1 1 .32 0 .6-.16.78-.4l1.74 1.6c.3.3.75.38 1.13.2l3.92-1.83c.38-.18.54-.62.36-1a.753.753 0 0 0-1-.36zM6 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
  {:else if variation === 'round'}
    <path
      d="m19.93 8.35-3.6 1.68L14 7.7V6.3l2.33-2.33 3.6 1.68c.38.18.82.01 1-.36.18-.38.01-.82-.36-1l-3.92-1.83a.993.993 0 0 0-1.13.2L13.78 4.4A.975.975 0 0 0 13 4c-.55 0-1 .45-1 1v1H8.82C8.34 4.66 6.96 3.75 5.4 4.06c-1.17.23-2.13 1.19-2.35 2.36-.25 1.34.4 2.54 1.43 3.16L7.08 18H5.5c-.83 0-1.5.67-1.5 1.5S4.67 21 5.5 21h10c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-2.12L8.41 8.77c.17-.24.31-.49.41-.77H12v1c0 .55.45 1 1 1 .32 0 .6-.16.78-.4l1.74 1.74c.3.3.75.38 1.13.2l3.92-1.83c.38-.18.54-.62.36-1a.753.753 0 0 0-1-.36zM6 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M14 10v-.18l2.01 2.01 5.23-2.44-.63-1.36-4.28 2L14 7.7V6.3l2.33-2.33 4.28 2 .63-1.36-5.23-2.44L14 4.18V4h-2v2H8.82C8.4 4.84 7.3 4 6 4 4.34 4 3 5.34 3 7c0 1.1.6 2.05 1.48 2.58L7.08 18H4v3h13v-3h-3.62L8.41 8.76c.17-.23.31-.48.41-.76H12v2h2zM6 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
  {:else if variation === 'two-tone'}
    <path d="m6.71 10 2.46 8h1.94l-4.3-8z" opacity=".3" /><circle
      cx="6"
      cy="7"
      r="1"
      opacity=".3"
    /><path
      d="m19.93 8.35-3.6 1.68L14 7.7V6.3l2.33-2.33 3.6 1.68c.38.18.82.01 1-.36.18-.38.01-.82-.36-1l-3.92-1.83a.993.993 0 0 0-1.13.2L13.78 4.4A.975.975 0 0 0 13 4c-.55 0-1 .45-1 1v1H8.82C8.4 4.84 7.3 4 6 4 4.34 4 3 5.34 3 7c0 1.1.6 2.05 1.48 2.58L7.08 18H6c-1.1 0-2 .9-2 2v1h13v-1c0-1.1-.9-2-2-2h-1.62L8.41 8.77c.17-.24.31-.49.41-.77H12v1c0 .55.45 1 1 1 .32 0 .6-.16.78-.4l1.74 1.74c.3.3.75.38 1.13.2l3.92-1.83c.38-.18.54-.62.36-1a.753.753 0 0 0-1-.36zM6 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5.11 10H9.17l-2.46-8h.1l4.3 8z"
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
@prop export let ariaLabel = 'precision manufacturing';
-->
