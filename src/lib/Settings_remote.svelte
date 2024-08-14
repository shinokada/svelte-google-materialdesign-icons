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

  export let ariaLabel = 'settings remote';
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
      d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-1 12h-4V11h4v10z"
    /><circle cx="12" cy="13" r="1" /><path
      d="m7.05 6.05 1.41 1.41a5.022 5.022 0 0 1 7.08 0l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"
    />
  {:else if variation === 'filled'}
    <path
      d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41a5.022 5.022 0 0 1 7.08 0l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"
    />
  {:else if variation === 'round'}
    <path
      d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 5.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM7.82 6.82c.35.35.9.38 1.3.1C9.93 6.34 10.93 6 12 6c1.07 0 2.07.34 2.88.91.4.28.95.26 1.3-.09.43-.43.39-1.15-.09-1.5A6.959 6.959 0 0 0 12 4c-1.53 0-2.94.49-4.09 1.32-.49.35-.52 1.07-.09 1.5z"
    /><path
      d="M12 0C9.36 0 6.94.93 5.05 2.47c-.46.38-.5 1.07-.08 1.49.36.36.93.39 1.32.07A9.034 9.034 0 0 1 12 2c2.17 0 4.16.77 5.7 2.04.39.32.96.29 1.32-.07.42-.42.38-1.11-.08-1.49C17.06.93 14.64 0 12 0z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M16 9H8v14h8V9zm-4 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41a5.022 5.022 0 0 1 7.08 0l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M10 21h4V11h-4v10zm2-9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
      opacity=".3"
    /><path
      d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-1 12h-4V11h4v10z"
    /><circle cx="12" cy="13" r="1" /><path
      d="m7.05 6.05 1.41 1.41a5.022 5.022 0 0 1 7.08 0l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"
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
@prop export let ariaLabel = 'settings remote';
-->
