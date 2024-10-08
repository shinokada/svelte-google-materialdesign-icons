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

  export let ariaLabel = 'token';
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
      d="m21 7-9-5-9 5v10l9 5 9-5V7zm-9-2.71 5.91 3.28-3.01 1.67C14.17 8.48 13.14 8 12 8s-2.17.48-2.9 1.24L6.09 7.57 12 4.29zm-1 14.87-6-3.33V9.26L8.13 11c-.09.31-.13.65-.13 1 0 1.86 1.27 3.43 3 3.87v3.29zM10 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm3 7.16v-3.28c1.73-.44 3-2.01 3-3.87 0-.35-.04-.69-.13-1.01L19 9.26v6.57l-6 3.33z"
    />
  {:else if variation === 'filled'}
    <path
      d="M19.97 6.43 12 2 4.03 6.43 9.1 9.24C9.83 8.48 10.86 8 12 8s2.17.48 2.9 1.24l5.07-2.81zM10 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm1 9.44L3 17V8.14l5.13 2.85c-.09.32-.13.66-.13 1.01 0 1.86 1.27 3.43 3 3.87v5.57zm2 0v-5.57c1.73-.44 3-2.01 3-3.87 0-.35-.04-.69-.13-1.01L21 8.14V17l-8 4.44z"
    />
  {:else if variation === 'round'}
    <path
      d="M12.97 2.54c-.6-.34-1.34-.34-1.94 0l-7 3.89L9.1 9.24C9.83 8.48 10.86 8 12 8s2.17.48 2.9 1.24l5.07-2.82-7-3.88zM10 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM3 8.14l5.13 2.85c-.09.32-.13.66-.13 1.01 0 1.86 1.27 3.43 3 3.87v5.57l-6.97-3.87A1.986 1.986 0 0 1 3 15.82V8.14zm10 13.3v-5.57c1.73-.44 3-2.01 3-3.87 0-.35-.04-.69-.13-1.01L21 8.14v7.68c0 .73-.39 1.4-1.03 1.75L13 21.44z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M19.97 6.43 12 2 4.03 6.43 9.1 9.24C9.83 8.48 10.86 8 12 8s2.17.48 2.9 1.24l5.07-2.81zM10 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm1 9.44L3 17V8.14l5.13 2.85c-.09.32-.13.66-.13 1.01 0 1.86 1.27 3.43 3 3.87v5.57zm2 0v-5.57c1.73-.44 3-2.01 3-3.87 0-.35-.04-.69-.13-1.01L21 8.14V17l-8 4.44z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="m12 4.29 5.91 3.28-3.01 1.67C14.17 8.48 13.14 8 12 8s-2.17.48-2.9 1.24L6.09 7.57 12 4.29zm-1 14.87-6-3.33V9.26L8.13 11c-.09.31-.13.65-.13 1 0 1.86 1.27 3.43 3 3.87v3.29zM10 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm3 7.16v-3.28c1.73-.44 3-2.01 3-3.87 0-.35-.04-.69-.13-1.01L19 9.26v6.57l-6 3.33z"
      opacity=".3"
    /><path
      d="m21 7-9-5-9 5v10l9 5 9-5V7zm-9-2.71 5.91 3.28-3.01 1.67C14.17 8.48 13.14 8 12 8s-2.17.48-2.9 1.24L6.09 7.57 12 4.29zm-1 14.87-6-3.33V9.26L8.13 11c-.09.31-.13.65-.13 1 0 1.86 1.27 3.43 3 3.87v3.29zM10 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm3 7.16v-3.28c1.73-.44 3-2.01 3-3.87 0-.35-.04-.69-.13-1.01L19 9.26v6.57l-6 3.33z"
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
@prop export let ariaLabel = 'token';
-->
