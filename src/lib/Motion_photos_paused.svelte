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

  export let ariaLabel = 'motion photos paused';
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
      d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-1.19.22-2.32.6-3.38l1.88.68C4.17 10.14 4 11.05 4 12c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8c-.95 0-1.85.17-2.69.48l-.68-1.89C9.69 2.22 10.82 2 12 2c5.52 0 10 4.48 10 10zM5.5 4C4.67 4 4 4.67 4 5.5S4.67 7 5.5 7 7 6.33 7 5.5 6.33 4 5.5 4zM11 16V8H9v8h2zm4 0V8h-2v8h2z"
    />
  {:else if variation === 'filled'}
    <path
      d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-1.19.22-2.32.6-3.38l1.88.68C4.17 10.14 4 11.05 4 12c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8c-.95 0-1.85.17-2.69.48l-.68-1.89C9.69 2.22 10.82 2 12 2c5.52 0 10 4.48 10 10zM5.5 4C4.67 4 4 4.67 4 5.5S4.67 7 5.5 7 7 6.33 7 5.5 6.33 4 5.5 4zM11 16V8H9v8h2zm4 0V8h-2v8h2z"
    />
  {:else if variation === 'round'}
    <path
      d="M4 9c.26.26.34.63.25.98a8.08 8.08 0 0 0 .1 4.38c.88 2.91 3.44 5.1 6.44 5.55 5.52.81 10.19-4.06 9.03-9.62-.65-3.13-3.23-5.61-6.37-6.16a8.169 8.169 0 0 0-3.46.13c-.35.09-.73 0-.98-.25-.56-.56-.28-1.49.47-1.69 1.47-.38 3.06-.44 4.7-.09 3.98.86 7.09 4.18 7.7 8.2 1.04 6.81-4.82 12.58-11.64 11.42-4.01-.69-7.26-3.86-8.04-7.85-.31-1.59-.24-3.12.12-4.53C2.52 8.72 3.45 8.45 4 9zm3-3.5C7 6.33 6.33 7 5.5 7S4 6.33 4 5.5 4.67 4 5.5 4 7 4.67 7 5.5zm5 .5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-2 9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-1.19.22-2.32.6-3.38l1.88.68C4.17 10.14 4 11.05 4 12c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8c-.95 0-1.85.17-2.69.48l-.68-1.89C9.69 2.22 10.82 2 12 2c5.52 0 10 4.48 10 10zM5.5 4C4.67 4 4 4.67 4 5.5S4.67 7 5.5 7 7 6.33 7 5.5 6.33 4 5.5 4zM11 16V8H9v8h2zm4 0V8h-2v8h2z"
    />
  {:else if variation === 'two-tone'}
    <path
      d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-1.19.22-2.32.6-3.38l1.88.68C4.17 10.14 4 11.05 4 12c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8c-.95 0-1.85.17-2.69.48l-.68-1.89C9.69 2.22 10.82 2 12 2c5.52 0 10 4.48 10 10zM5.5 4C4.67 4 4 4.67 4 5.5S4.67 7 5.5 7 7 6.33 7 5.5 6.33 4 5.5 4zM11 16V8H9v8h2zm4 0V8h-2v8h2z"
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
@prop export let ariaLabel = 'motion photos paused';
-->
