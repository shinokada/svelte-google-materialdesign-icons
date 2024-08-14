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

  export let ariaLabel = 'brunch dining';
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
      d="M2 21.5c0 .28.22.5.49.5h13.02c.27 0 .49-.22.49-.5V20H2v1.5zM15.5 16H11v-2H7v2H2.5c-.28 0-.5.22-.5.5V18h14v-1.5c0-.28-.22-.5-.5-.5zm4.97-.55A5.796 5.796 0 0 0 22 11.51V2h-6v9.47c0 1.48.58 2.92 1.6 4l.4.42V22h4v-2h-2v-4.03l.47-.52zM18 4h2v4h-2V4zm1.03 10.07a3.893 3.893 0 0 1-1.03-2.6V10h2v1.51c0 .95-.34 1.85-.97 2.56z"
    />
  {:else if variation === 'filled'}
    <path
      fill-rule="evenodd"
      d="M18 8h2V4h-2v4zm-2.49 14H2.49c-.27 0-.49-.22-.49-.5V20h14v1.5c0 .28-.22.5-.49.5zM18 15.89l-.4-.42a5.852 5.852 0 0 1-1.6-4V2h6v9.51c0 1.46-.54 2.87-1.53 3.94l-.47.52V20h2v2h-4v-6.11zM7 16v-2h4v2h4.5c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5h-13c-.28 0-.5-.22-.5-.5v-1c0-.28.22-.5.5-.5H7z"
    />
  {:else if variation === 'round'}
    <path
      d="M18 8h2V4h-2v4zm-3 14H3c-.55 0-1-.45-1-1v-1h14v1c0 .55-.45 1-1 1zm3-6.11-.4-.42a5.788 5.788 0 0 1-1.6-4V3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v8.51c0 1.46-.54 2.87-1.53 3.94l-.47.52V20h1c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1v-5.11zM7 16v-1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h4c.55 0 1 .45 1 1v1H2v-1c0-.55.45-1 1-1h4z"
    />
  {:else if variation === 'sharp'}
    <path
      d="M18 8h2V4h-2v4zm-2 14H2v-2h14v2zm2-6.11-.4-.42a5.852 5.852 0 0 1-1.6-4V2h6v9.51c0 1.46-.54 2.87-1.53 3.94l-.47.52V20h2v2h-4v-6.11zM7 16v-2h4v2h5v2H2v-2h5z"
    />
  {:else if variation === 'two-tone'}
    <path d="M20 10h-2v1.47c0 .95.37 1.89 1.03 2.6.63-.71.97-1.61.97-2.56V10z" opacity=".3" /><path
      d="M2 21.5c0 .28.22.5.49.5h13.02c.27 0 .49-.22.49-.5V20H2v1.5zm18.47-6.05A5.796 5.796 0 0 0 22 11.51V2h-6v9.47c0 1.48.58 2.92 1.6 4l.4.42V22h4v-2h-2v-4.03l.47-.52zM18 4h2v4h-2V4zm1.03 10.07a3.893 3.893 0 0 1-1.03-2.6V10h2v1.51c0 .95-.34 1.85-.97 2.56zM15.5 16H11v-2H7v2H2.5c-.28 0-.5.22-.5.5V18h14v-1.5c0-.28-.22-.5-.5-.5z"
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
@prop export let ariaLabel = 'brunch dining';
-->
