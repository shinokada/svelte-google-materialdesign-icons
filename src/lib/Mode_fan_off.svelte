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

  export let ariaLabel = 'mode fan off';
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
      d="M18 8c-1.06 0-1.64.29-3.91 1.19-.19-.14-.4-.27-.62-.37.25-1.03.61-1.53 1.33-2.04.81-.57 1.2-1.34 1.2-2.28 0-1.22-.95-2.5-2.6-2.5-3.08 0-4.92 1.47-5.32 3.26l2.33 2.33C10.07 6.69 10 6.38 10 6c0-1.18 1.4-2 3.4-2 .57 0 .6.42.6.5 0 .27-.05.43-.35.65-1.27.9-1.83 1.91-2.16 3.39l-.02.1 7.25 7.25c.24.06.5.11.78.11 1.22 0 2.5-.95 2.5-2.6C22 9.91 20.11 8 18 8zm1.5 6c-.27 0-.43-.05-.65-.35-.9-1.27-1.91-1.83-3.39-2.16a3.12 3.12 0 0 0-.15-.62c1.8-.75 2.18-.87 2.69-.87 1.18 0 2 1.4 2 3.4 0 .57-.42.6-.5.6zM1.39 4.22l3.89 3.89C5.04 8.05 4.78 8 4.5 8 3.28 8 2 8.95 2 10.6 2 14.09 3.89 16 6 16c1.06 0 1.64-.29 3.91-1.19.19.14.4.27.62.37-.25 1.03-.61 1.53-1.33 2.04-.81.57-1.2 1.34-1.2 2.28 0 1.22.95 2.5 2.6 2.5 3.08 0 4.92-1.47 5.32-3.26l3.86 3.86 1.41-1.41L2.81 2.81 1.39 4.22zm11.13 11.24c.03 0 .06-.02.09-.02l.97.97c.35.9.42 1.21.42 1.59 0 1.18-1.4 2-3.4 2-.57 0-.6-.42-.6-.5 0-.27.05-.43.35-.65 1.28-.89 1.83-1.91 2.17-3.39zm-3.98-2.94c.03.22.08.42.15.62-1.8.74-2.18.86-2.69.86-1.18 0-2-1.4-2-3.4 0-.57.42-.6.5-.6.27 0 .43.05.65.35.89 1.28 1.91 1.83 3.39 2.17z"
    />
  {:else if variation === 'filled'}
    <path
      d="m16.34 8.36-2.29.82c-.18-.13-.38-.25-.58-.34.17-.83.63-1.58 1.36-2.06C16.85 5.44 16.18 2 13.39 2c-3.08 0-4.9 1.47-5.3 3.26L18.73 15.9c1.5.39 3.27-.51 3.27-2.51 0-4.39-3.01-6.23-5.66-5.03zM2.81 2.81 1.39 4.22 5.27 8.1C3.77 7.7 2 8.61 2 10.61c0 4.4 3.01 6.24 5.66 5.03l2.29-.82c.18.13.38.25.58.34-.17.83-.63 1.58-1.36 2.06C7.15 18.56 7.82 22 10.61 22c3.08 0 4.9-1.47 5.3-3.26l3.87 3.87 1.41-1.41L2.81 2.81z"
    />
  {:else if variation === 'round'}
    <path
      d="m16.34 8.36-2.29.82c-.18-.13-.38-.25-.58-.34.17-.83.63-1.58 1.36-2.06C16.85 5.44 16.18 2 13.39 2c-3.08 0-4.9 1.47-5.3 3.26L18.73 15.9c1.5.39 3.27-.51 3.27-2.51 0-4.39-3.01-6.23-5.66-5.03zM2.1 3.51a.996.996 0 0 0 0 1.41L5.27 8.1C3.77 7.7 2 8.61 2 10.61c0 4.4 3.01 6.24 5.66 5.03l2.29-.82c.18.13.38.25.58.34-.17.83-.63 1.58-1.36 2.06C7.15 18.56 7.82 22 10.61 22c3.08 0 4.9-1.47 5.3-3.26l3.16 3.16a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0z"
    />
  {:else if variation === 'sharp'}
    <path
      d="m16.34 8.36-2.29.82c-.18-.13-.38-.25-.58-.34.17-.83.63-1.58 1.36-2.06C16.85 5.44 16.18 2 13.39 2c-3.08 0-4.9 1.47-5.3 3.26L18.73 15.9c1.5.39 3.27-.51 3.27-2.51 0-4.39-3.01-6.23-5.66-5.03zM2.81 2.81 1.39 4.22 5.27 8.1C3.77 7.7 2 8.61 2 10.61c0 4.4 3.01 6.24 5.66 5.03l2.29-.82c.18.13.38.25.58.34-.17.83-.63 1.58-1.36 2.06C7.15 18.56 7.82 22 10.61 22c3.08 0 4.9-1.47 5.3-3.26l3.87 3.87 1.41-1.41L2.81 2.81z"
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
@prop export let ariaLabel = 'mode fan off';
-->
