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

  export let ariaLabel = 'face 4';
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
      d="M12 2c-.96 0-1.88.14-2.75.39A4.986 4.986 0 0 0 5 0C2.24 0 0 2.24 0 5c0 1.8.96 3.37 2.39 4.25C2.14 10.12 2 11.04 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 2c2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88.43-.07.88-.12 1.34-.12zM4.42 9.47a8.046 8.046 0 0 1 3.66-4.44 8.046 8.046 0 0 1-3.66 4.44zM2 5c0-1.65 1.35-3 3-3 .95 0 1.8.46 2.35 1.15-1.79.94-3.26 2.41-4.2 4.2C2.46 6.8 2 5.95 2 5zm10 15c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.55a9.942 9.942 0 0 0 9.92 3.46c.21.71.33 1.46.33 2.24 0 4.41-3.59 8-8 8z"
    /><circle cx="9" cy="13" r="1.25" /><circle cx="15" cy="13" r="1.25" />
  {:else if variation === 'filled'}
    <path
      d="M12 2c-.96 0-1.88.14-2.75.39A4.986 4.986 0 0 0 5 0C2.24 0 0 2.24 0 5c0 1.8.96 3.37 2.39 4.25C2.14 10.12 2 11.04 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.55a9.942 9.942 0 0 0 9.92 3.46c.21.71.33 1.46.33 2.24 0 4.41-3.59 8-8 8z"
    /><circle cx="9" cy="13" r="1.25" /><circle cx="15" cy="13" r="1.25" />
  {:else if variation === 'round'}
    <path
      d="M12 2c-.96 0-1.88.14-2.75.39A4.986 4.986 0 0 0 5 0C2.24 0 0 2.24 0 5c0 1.8.96 3.37 2.39 4.25C2.14 10.12 2 11.04 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.55a9.942 9.942 0 0 0 9.92 3.46c.21.71.33 1.46.33 2.24 0 4.41-3.59 8-8 8z"
    /><circle cx="9" cy="13" r="1.25" /><circle cx="15" cy="13" r="1.25" />
  {:else if variation === 'sharp'}
    <path
      d="M12 2c-.96 0-1.88.14-2.75.39A4.986 4.986 0 0 0 5 0C2.24 0 0 2.24 0 5c0 1.8.96 3.37 2.39 4.25C2.14 10.12 2 11.04 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.55a9.942 9.942 0 0 0 9.92 3.46c.21.71.33 1.46.33 2.24 0 4.41-3.59 8-8 8z"
    /><circle cx="9" cy="13" r="1.25" /><circle cx="15" cy="13" r="1.25" />
  {:else if variation === 'two-tone'}
    <path
      d="M4.42 9.47a8.046 8.046 0 0 0 3.66-4.44 8.046 8.046 0 0 0-3.66 4.44zM17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12C12.06 6.44 14.6 8 17.5 8zM7.35 3.15C6.8 2.46 5.95 2 5 2 3.35 2 2 3.35 2 5c0 .95.46 1.8 1.15 2.35.94-1.79 2.41-3.26 4.2-4.2z"
      opacity=".3"
    /><path
      d="M12 2c-.96 0-1.88.14-2.75.39A4.986 4.986 0 0 0 5 0C2.24 0 0 2.24 0 5c0 1.8.96 3.37 2.39 4.25C2.14 10.12 2 11.04 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 2c2.9 0 5.44 1.56 6.84 3.88-.43.07-.88.12-1.34.12-2.9 0-5.44-1.56-6.84-3.88.43-.07.88-.12 1.34-.12zM2 5c0-1.65 1.35-3 3-3 .95 0 1.8.46 2.35 1.15-1.79.94-3.26 2.41-4.2 4.2C2.46 6.8 2 5.95 2 5zm6.08.03a8.046 8.046 0 0 1-3.66 4.44 8.046 8.046 0 0 1 3.66-4.44zM12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1.01-.15 2.6-.98 4.68-2.99 5.74-5.55a9.942 9.942 0 0 0 9.92 3.46c.21.71.33 1.46.33 2.24 0 4.41-3.59 8-8 8z"
    /><circle cx="9" cy="13" r="1.25" /><circle cx="15" cy="13" r="1.25" />
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
@prop export let ariaLabel = 'face 4';
-->
