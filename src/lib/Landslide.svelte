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

  export let ariaLabel = 'landslide';
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
      d="M11 12 8 8H2v14h20l-6-8-5-2zm1.53 2.77L6 16.95l-2-.67v-1.89l2 .67 3.95-1.32 2.58 1.03zM7 10l1.57 2.09-2.57.86-2-.67V10h3zM4 20v-1.61l2 .67 9.03-3.01L18 20H4zM17 6V1l-5-1-3 2v4l3 2 5-2zm-6-2.93 1.42-.95 2.58.52v2.01l-2.77 1.11L11 4.93V3.07zM18.5 7 16 9v3l2.5 2 4.5-2V8l-4.5-1zm2.5 3.7-2.2.98-.8-.64V9.96l1-.8 2 .44v1.1z"
    />
  {:else if variation === 'filled'}
    <path
      d="m15.47 13.79-2.58-1.03L6 15.05l-4-1.54v2.1l4 1.34zm-4.9-2.37L8 8H2v3.61l4 1.34zM6 19.05l-4-1.33V22h20l-4.97-6.62zM17 6V1l-5-1-3 2v4l3 2zm1.5 1L16 9v3l2.5 2 4.5-2V8z"
    />
  {:else if variation === 'round'}
    <path
      d="m15.47 13.79-2.58-1.03L6 15.05l-4-1.54v2.1l4 1.34zm-4.9-2.37L8.6 8.8C8.22 8.3 7.63 8 7 8H4c-1.1 0-2 .9-2 2v1.61l4 1.33 4.57-1.52zM6 19.05l-4-1.33V20c0 1.1.9 2 2 2h14c1.65 0 2.59-1.88 1.6-3.2l-2.57-3.42L6 19.05zm11-14.4V2.64A2 2 0 0 0 15.39.68L12.81.16c-.52-.1-1.06 0-1.5.3l-1.42.95C9.33 1.78 9 2.4 9 3.07v1.86c0 .67.33 1.29.89 1.66l1.23.82c.55.37 1.24.44 1.85.19l2.77-1.11C16.5 6.2 17 5.46 17 4.65zm.75 2.95-1 .8c-.47.38-.75.95-.75 1.56v1.08c0 .61.28 1.18.75 1.56l.8.64c.58.47 1.38.57 2.06.27l2.2-.98c.72-.32 1.19-1.04 1.19-1.83V9.6c0-.94-.65-1.75-1.57-1.95l-2-.44a1.99 1.99 0 0 0-1.68.39z"
    />
  {:else if variation === 'sharp'}
    <path
      d="m15.47 13.79-2.58-1.03L6 15.05l-4-1.54v2.1l4 1.34zm-4.9-2.37L8 8H2v3.61l4 1.34zM6 19.05l-4-1.33V22h20l-4.97-6.62zM17 6V1l-5-1-3 2v4l3 2zm1.5 1L16 9v3l2.5 2 4.5-2V8z"
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
@prop export let ariaLabel = 'landslide';
-->
