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

  export let ariaLabel = 'shutter speed';
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
      d="M15 1H9v2h6V1zm4.03 6.39 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-.32-5H6.35a5.992 5.992 0 0 0 3.41 3.56l-.11-.06 2.03-3.5zm5.97-4a6.012 6.012 0 0 0-3.34-3.54L12.26 11h5.39zm-7.04 7.83c.45.11.91.17 1.39.17 1.34 0 2.57-.45 3.57-1.19l-2.11-3.9-2.85 4.92zM7.55 8.99A5.965 5.965 0 0 0 6 13c0 .34.04.67.09 1h4.72L7.55 8.99zm8.79 8.14A5.94 5.94 0 0 0 18 13c0-.34-.04-.67-.09-1h-4.34l2.77 5.13zm-3.01-9.98C12.9 7.06 12.46 7 12 7c-1.4 0-2.69.49-3.71 1.29l2.32 3.56 2.72-4.7z"
    />
  {:else if variation === 'filled'}
    <path
      d="M15 1H9v2h6V1zm4.03 6.39 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-.32-5H6.35a5.992 5.992 0 0 0 3.41 3.56l-.11-.06 2.03-3.5zm5.97-4a6.012 6.012 0 0 0-3.34-3.54L12.26 11h5.39zm-7.04 7.83c.45.11.91.17 1.39.17 1.34 0 2.57-.45 3.57-1.19l-2.11-3.9-2.85 4.92zM7.55 8.99A5.965 5.965 0 0 0 6 13c0 .34.04.67.09 1h4.72L7.55 8.99zm8.79 8.14A5.94 5.94 0 0 0 18 13c0-.34-.04-.67-.09-1h-4.34l2.77 5.13zm-3.01-9.98C12.9 7.06 12.46 7 12 7c-1.4 0-2.69.49-3.71 1.29l2.32 3.56 2.72-4.7z"
    />
  {:else if variation === 'round'}
    <path
      d="M10 3h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zm9.03 4.39.75-.75a.993.993 0 0 0 0-1.4l-.01-.01a.993.993 0 0 0-1.4 0l-.75.75A8.962 8.962 0 0 0 12 4c-4.8 0-8.88 3.96-9 8.76A8.998 8.998 0 0 0 12 22a8.994 8.994 0 0 0 7.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.19-5h-3.7c-.38 0-.62.4-.45.74a5.66 5.66 0 0 0 2.57 2.57c.23.11.52.02.65-.21l1.37-2.35a.503.503 0 0 0-.44-.75zm3.92-7.35a.501.501 0 0 0-.65.2l-1.38 2.39a.5.5 0 0 0 .43.76h3.76c.38 0 .62-.4.45-.73a6.06 6.06 0 0 0-2.61-2.62zm-.85 7.05a.499.499 0 0 0-.87-.01l-2.04 3.52a.5.5 0 0 0 .39.75c1.34.14 2.69-.18 3.83-.89.22-.14.28-.43.16-.66l-1.47-2.71zm-3.57-1.47L7.93 9.57c-.2-.3-.64-.3-.84 0a6.045 6.045 0 0 0-1.05 3.98c.02.26.24.45.5.45h3.35c.39 0 .63-.44.42-.77zm3.66-.49 2.02 3.74c.18.33.64.35.86.05.86-1.18 1.24-2.62 1.12-4.08a.5.5 0 0 0-.5-.45h-3.05c-.39 0-.63.4-.45.74zm-3.8-1.57c.2.31.66.3.85-.02l1.94-3.35c.19-.32-.03-.72-.4-.76-1.36-.12-2.73.21-3.88.97-.22.15-.27.46-.13.68l1.62 2.48z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M15 1H9v2h6V1zm4.03 6.39 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-.32-5H6.35a5.992 5.992 0 0 0 3.41 3.56l-.11-.06 2.03-3.5zm5.97-4a6.012 6.012 0 0 0-3.34-3.54L12.26 11h5.39zm-7.04 7.83c.45.11.91.17 1.39.17 1.34 0 2.57-.45 3.57-1.19l-2.11-3.9-2.85 4.92zM7.55 8.99A5.965 5.965 0 0 0 6 13c0 .34.04.67.09 1h4.72L7.55 8.99zm8.79 8.14A5.94 5.94 0 0 0 18 13c0-.34-.04-.67-.09-1h-4.34l2.77 5.13zm-3.01-9.98C12.9 7.06 12.46 7 12 7c-1.4 0-2.69.49-3.71 1.29l2.32 3.56 2.72-4.7z"
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
@prop export let ariaLabel = 'shutter speed';
-->
