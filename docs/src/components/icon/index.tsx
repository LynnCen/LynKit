import React from 'react'

export const ApiTools = (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="apiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3B82F6" />
        <stop offset="100%" stop-color="#1D4ED8" />
      </linearGradient>
      <filter id="apiShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow
          dx="0"
          dy="4"
          stdDeviation="6"
          flood-color="#3B82F6"
          flood-opacity="0.3"
        />
      </filter>
      <clipPath id="apiClip">
        <path d="M100,20 L180,60 L180,140 L100,180 L20,140 L20,60 Z" />
      </clipPath>
    </defs>

    <circle cx="100" cy="100" r="90" fill="#F1F5F9" />

    <path
      d="M100,20 L180,60 L180,140 L100,180 L20,140 L20,60 Z"
      fill="url(#apiGradient)"
      filter="url(#apiShadow)"
    />

    <g clip-path="url(#apiClip)">
      <g stroke="white" stroke-width="1" opacity="0.6">
        <line x1="40" y1="60" x2="160" y2="60">
          <animate
            attributeName="x2"
            values="160;150;160"
            dur="7s"
            repeatCount="indefinite"
          />
        </line>
        <line x1="40" y1="80" x2="120" y2="80">
          <animate
            attributeName="x2"
            values="120;130;120"
            dur="9s"
            repeatCount="indefinite"
          />
        </line>
        <line x1="40" y1="100" x2="140" y2="100">
          <animate
            attributeName="x2"
            values="140;145;140"
            dur="8s"
            repeatCount="indefinite"
          />
        </line>
        <line x1="40" y1="120" x2="100" y2="120">
          <animate
            attributeName="x2"
            values="100;110;100"
            dur="6s"
            repeatCount="indefinite"
          />
        </line>
        <line x1="40" y1="140" x2="130" y2="140">
          <animate
            attributeName="x2"
            values="130;125;130"
            dur="10s"
            repeatCount="indefinite"
          />
        </line>
      </g>

      <g>
        <circle cx="0" cy="0" r="5" fill="white" opacity="0.8">
          <animate
            attributeName="cx"
            values="40;160;40"
            dur="5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="60;60;60"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="0" cy="0" r="4" fill="white" opacity="0.7">
          <animate
            attributeName="cx"
            values="120;40;120"
            dur="7s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="80;80;80"
            dur="7s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="0" cy="0" r="4.5" fill="white" opacity="0.9">
          <animate
            attributeName="cx"
            values="40;140;40"
            dur="6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="100;100;100"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="0" cy="0" r="3.5" fill="white" opacity="0.6">
          <animate
            attributeName="cx"
            values="100;40;100"
            dur="8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="120;120;120"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="0" cy="0" r="5" fill="white" opacity="0.8">
          <animate
            attributeName="cx"
            values="40;130;40"
            dur="9s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="140;140;140"
            dur="9s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      <g>
        <rect
          x="30"
          y="55"
          width="20"
          height="10"
          rx="5"
          fill="#3B82F6"
          stroke="white"
          stroke-width="1"
        >
          <animate
            attributeName="width"
            values="20;25;20"
            dur="7s"
            repeatCount="indefinite"
          />
        </rect>

        <rect
          x="30"
          y="75"
          width="20"
          height="10"
          rx="5"
          fill="#3B82F6"
          stroke="white"
          stroke-width="1"
        >
          <animate
            attributeName="width"
            values="20;23;20"
            dur="8s"
            repeatCount="indefinite"
          />
        </rect>

        <rect
          x="30"
          y="95"
          width="20"
          height="10"
          rx="5"
          fill="#3B82F6"
          stroke="white"
          stroke-width="1"
        >
          <animate
            attributeName="width"
            values="20;22;20"
            dur="9s"
            repeatCount="indefinite"
          />
        </rect>

        <rect
          x="30"
          y="115"
          width="20"
          height="10"
          rx="5"
          fill="#3B82F6"
          stroke="white"
          stroke-width="1"
        >
          <animate
            attributeName="width"
            values="20;24;20"
            dur="7.5s"
            repeatCount="indefinite"
          />
        </rect>

        <rect
          x="30"
          y="135"
          width="20"
          height="10"
          rx="5"
          fill="#3B82F6"
          stroke="white"
          stroke-width="1"
        >
          <animate
            attributeName="width"
            values="20;26;20"
            dur="8.5s"
            repeatCount="indefinite"
          />
        </rect>
      </g>

      <g font-family="monospace" font-size="8" fill="white">
        <text x="55" y="62">
          debounce()
        </text>
        <text x="55" y="82">
          throttle()
        </text>
        <text x="55" y="102">
          formatDate()
        </text>
        <text x="55" y="122">
          deepClone()
        </text>
        <text x="55" y="142">
          LRUCache()
        </text>
      </g>

      <g fill="none" stroke="white" stroke-width="2">
        <path d="M150,40 L160,40 L160,65 L150,65" opacity="0.8">
          <animate
            attributeName="opacity"
            values="0.8;0.6;0.8"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>

        <path d="M130,90 L140,90 L140,110 L130,110" opacity="0.7">
          <animate
            attributeName="opacity"
            values="0.7;0.5;0.7"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>

        <path d="M110,130 L120,130 L120,150 L110,150" opacity="0.9">
          <animate
            attributeName="opacity"
            values="0.9;0.7;0.9"
            dur="7s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      <g>
        <circle
          cx="170"
          cy="50"
          r="15"
          fill="none"
          stroke="white"
          stroke-width="1.5"
          opacity="0.9"
        />

        <path
          d="M170,35 L170,38 M177,37 L175,40 M183,43 L179,45 M185,50 L182,50 M183,57 L179,55 M177,63 L175,60 M170,65 L170,62 M163,63 L165,60 M157,57 L161,55 M155,50 L158,50 M157,43 L161,45 M163,37 L165,40"
          stroke="white"
          stroke-width="1.5"
          opacity="0.9"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 170 50"
            to="360 170 50"
            dur="15s"
            repeatCount="indefinite"
          />
        </path>

        <circle
          cx="140"
          cy="120"
          r="12"
          fill="none"
          stroke="white"
          stroke-width="1.5"
          opacity="0.8"
        />

        <path
          d="M140,108 L140,110 M145,109 L144,111 M149,114 L147,115 M150,120 L148,120 M149,126 L147,125 M145,131 L144,129 M140,132 L140,130 M135,131 L136,129 M131,126 L133,125 M130,120 L132,120 M131,114 L133,115 M135,109 L136,111"
          stroke="white"
          stroke-width="1.5"
          opacity="0.8"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 140 120"
            to="-360 140 120"
            dur="12s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M30,40 C40,30 160,30 170,40"
          fill="none"
          stroke="white"
          stroke-width="1"
          opacity="0.6"
        >
          <animate
            attributeName="d"
            values="M30,40 C40,30 160,30 170,40;M30,40 C40,35 160,25 170,40;M30,40 C40,30 160,30 170,40"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M30,160 C40,170 160,170 170,160"
          fill="none"
          stroke="white"
          stroke-width="1"
          opacity="0.6"
        >
          <animate
            attributeName="d"
            values="M30,160 C40,170 160,170 170,160;M30,160 C40,165 160,175 170,160;M30,160 C40,170 160,170 170,160"
            dur="12s"
            repeatCount="indefinite"
          />
        </path>
      </g>

      <g font-family="monospace" font-size="6" fill="white" opacity="0.5">
        <text x="40" y="175">
          01001010 01010011
        </text>
        <text x="40" y="183">
          10101010 00110011
        </text>
        <text x="40" y="191">
          11001100 10101010
        </text>
      </g>

      <circle
        cx="100"
        cy="100"
        r="50"
        fill="none"
        stroke="white"
        stroke-width="0.5"
        opacity="0.3"
      >
        <animate
          attributeName="r"
          values="50;60;50"
          dur="8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.3;0.1;0.3"
          dur="8s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke="white"
        stroke-width="0.5"
        opacity="0.2"
      >
        <animate
          attributeName="r"
          values="70;80;70"
          dur="12s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.2;0.05;0.2"
          dur="12s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
)

export const UiComponents = (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="uiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6366F1" />
        <stop offset="100%" stop-color="#4F46E5" />
      </linearGradient>
      <filter id="uiShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow
          dx="0"
          dy="4"
          stdDeviation="6"
          flood-color="#6366F1"
          flood-opacity="0.3"
        />
      </filter>
      <clipPath id="uiClip">
        <rect x="40" y="40" width="120" height="120" rx="20" />
      </clipPath>
    </defs>

    <circle cx="100" cy="100" r="90" fill="#F1F5F9" />

    <rect
      x="40"
      y="40"
      width="120"
      height="120"
      rx="20"
      fill="url(#uiGradient)"
      filter="url(#uiShadow)"
    />

    <g clip-path="url(#uiClip)">
      <rect
        x="55"
        y="60"
        width="90"
        height="25"
        rx="12.5"
        fill="white"
        opacity="0.9"
      >
        <animate
          attributeName="opacity"
          values="0.9;0.7;0.9"
          dur="3s"
          repeatCount="indefinite"
        />
      </rect>

      <rect
        x="55"
        y="95"
        width="90"
        height="25"
        rx="4"
        fill="white"
        opacity="0.7"
      >
        <animate
          attributeName="width"
          values="90;85;90"
          dur="4s"
          repeatCount="indefinite"
        />
      </rect>

      <rect
        x="55"
        y="130"
        width="16"
        height="16"
        rx="3"
        fill="white"
        opacity="0.8"
      >
        <animate
          attributeName="rx"
          values="3;8;3"
          dur="5s"
          repeatCount="indefinite"
        />
      </rect>

      <rect
        x="80"
        y="134"
        width="65"
        height="8"
        rx="4"
        fill="white"
        opacity="0.6"
      />

      <g opacity="0.95">
        <rect
          x="130"
          y="65"
          width="45"
          height="55"
          rx="8"
          fill="white"
          opacity="0.95"
          transform="rotate(15, 130, 65)"
        >
          <animate
            attributeName="transform"
            values="rotate(15, 130, 65);rotate(10, 130, 65);rotate(15, 130, 65)"
            dur="5s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="135"
          y="75"
          width="25"
          height="5"
          rx="2.5"
          fill="#6366F1"
          opacity="0.6"
          transform="rotate(15, 130, 65)"
        />
        <rect
          x="135"
          y="85"
          width="35"
          height="5"
          rx="2.5"
          fill="#6366F1"
          opacity="0.4"
          transform="rotate(15, 130, 65)"
        />
        <rect
          x="135"
          y="95"
          width="30"
          height="5"
          rx="2.5"
          fill="#6366F1"
          opacity="0.3"
          transform="rotate(15, 130, 65)"
        />
      </g>

      <circle
        cx="100"
        cy="100"
        r="55"
        fill="none"
        stroke="white"
        stroke-width="0.5"
        opacity="0.5"
      />
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke="white"
        stroke-width="0.5"
        opacity="0.3"
      />

      <circle cx="0" cy="0" r="5" fill="white" opacity="0.8">
        <animateMotion
          path="M0,0 a55,55 0 1,1 0,0.1"
          dur="10s"
          repeatCount="indefinite"
          rotate="auto"
        />
      </circle>

      <circle cx="0" cy="0" r="3" fill="white" opacity="0.6">
        <animateMotion
          path="M0,0 a70,70 0 1,0 0,-0.1"
          dur="15s"
          repeatCount="indefinite"
          rotate="auto"
        />
      </circle>

      <rect
        x="45"
        y="45"
        width="6"
        height="6"
        rx="1"
        fill="white"
        opacity="0.7"
      >
        <animate
          attributeName="x"
          values="45;60;45"
          dur="7s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="45;50;45"
          dur="6s"
          repeatCount="indefinite"
        />
      </rect>

      <rect
        x="150"
        y="45"
        width="4"
        height="4"
        rx="1"
        fill="white"
        opacity="0.6"
      >
        <animate
          attributeName="x"
          values="150;145;150"
          dur="8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="45;55;45"
          dur="7s"
          repeatCount="indefinite"
        />
      </rect>

      <rect
        x="45"
        y="150"
        width="5"
        height="5"
        rx="1"
        fill="white"
        opacity="0.5"
      >
        <animate
          attributeName="x"
          values="45;55;45"
          dur="9s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="150;145;150"
          dur="8s"
          repeatCount="indefinite"
        />
      </rect>

      <rect
        x="150"
        y="150"
        width="7"
        height="7"
        rx="1"
        fill="white"
        opacity="0.8"
      >
        <animate
          attributeName="x"
          values="150;140;150"
          dur="10s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          values="150;140;150"
          dur="9s"
          repeatCount="indefinite"
        />
      </rect>
    </g>

    <circle cx="130" cy="50" r="5" fill="white" opacity="0.8" />
    <circle cx="145" cy="50" r="5" fill="white" opacity="0.6" />
    <circle cx="160" cy="50" r="5" fill="white" opacity="0.4" />
  </svg>
)

export const HooksLogo = (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="hooksGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#A855F7" />
        <stop offset="100%" stop-color="#7E22CE" />
      </linearGradient>
      <filter id="hooksShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow
          dx="0"
          dy="4"
          stdDeviation="6"
          flood-color="#A855F7"
          flood-opacity="0.3"
        />
      </filter>
      <clipPath id="hooksClip">
        <circle cx="100" cy="100" r="80" />
      </clipPath>
    </defs>

    <circle cx="100" cy="100" r="90" fill="#F1F5F9" />

    <circle
      cx="100"
      cy="100"
      r="80"
      fill="url(#hooksGradient)"
      filter="url(#hooksShadow)"
    />

    <g clip-path="url(#hooksClip)">
      <g transform="translate(100, 100) scale(0.8)">
        <circle
          cx="0"
          cy="0"
          r="18"
          fill="none"
          stroke="white"
          stroke-width="2"
          opacity="0.9"
        >
          <animate
            attributeName="r"
            values="18;20;18"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>

        <ellipse
          cx="0"
          cy="0"
          rx="45"
          ry="18"
          fill="none"
          stroke="white"
          stroke-width="2"
          opacity="0.8"
          transform="rotate(0)"
        >
          <animate
            attributeName="rx"
            values="45;50;45"
            dur="8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="transform"
            values="rotate(0);rotate(360)"
            dur="20s"
            repeatCount="indefinite"
          />
        </ellipse>

        <ellipse
          cx="0"
          cy="0"
          rx="45"
          ry="18"
          fill="none"
          stroke="white"
          stroke-width="2"
          opacity="0.6"
          transform="rotate(60)"
        >
          <animate
            attributeName="ry"
            values="18;22;18"
            dur="7s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="transform"
            values="rotate(60);rotate(420)"
            dur="25s"
            repeatCount="indefinite"
          />
        </ellipse>

        <ellipse
          cx="0"
          cy="0"
          rx="45"
          ry="18"
          fill="none"
          stroke="white"
          stroke-width="2"
          opacity="0.4"
          transform="rotate(120)"
        >
          <animate
            attributeName="rx"
            values="45;48;45"
            dur="9s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="transform"
            values="rotate(120);rotate(480)"
            dur="30s"
            repeatCount="indefinite"
          />
        </ellipse>
      </g>

      <g transform="translate(50, 50)">
        <rect
          x="0"
          y="0"
          width="120"
          height="10"
          rx="5"
          fill="white"
          opacity="0.6"
        >
          <animate
            attributeName="width"
            values="120;110;120"
            dur="7s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="0"
          y="15"
          width="80"
          height="10"
          rx="5"
          fill="white"
          opacity="0.4"
        >
          <animate
            attributeName="width"
            values="80;90;80"
            dur="6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="15"
          y="30"
          width="100"
          height="10"
          rx="5"
          fill="white"
          opacity="0.5"
        >
          <animate
            attributeName="width"
            values="100;110;100"
            dur="8s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="15"
          y="45"
          width="70"
          height="10"
          rx="5"
          fill="white"
          opacity="0.7"
        >
          <animate
            attributeName="width"
            values="70;75;70"
            dur="5s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="0"
          y="60"
          width="100"
          height="10"
          rx="5"
          fill="white"
          opacity="0.6"
        >
          <animate
            attributeName="width"
            values="100;95;100"
            dur="9s"
            repeatCount="indefinite"
          />
        </rect>
      </g>

      <path
        d="M140,60 C160,60 170,70 170,90 L170,110 C170,130 160,140 140,140 L130,140 L130,130 L140,130 C155,130 160,125 160,110 L160,90 C160,75 155,70 140,70 L130,70 L130,60 L140,60 Z"
        fill="white"
        opacity="0.8"
      >
        <animate
          attributeName="opacity"
          values="0.8;0.6;0.8"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>

      <g>
        <circle cx="40" cy="40" r="3" fill="white" opacity="0.8">
          <animate
            attributeName="cx"
            values="40;45;40"
            dur="7s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="40;50;40"
            dur="8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="3;4;3"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="160" cy="40" r="4" fill="white" opacity="0.7">
          <animate
            attributeName="cx"
            values="160;150;160"
            dur="9s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="40;30;40"
            dur="10s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="4;3;4"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="40" cy="160" r="2" fill="white" opacity="0.9">
          <animate
            attributeName="cx"
            values="40;50;40"
            dur="8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="160;150;160"
            dur="7s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="160" cy="160" r="3" fill="white" opacity="0.8">
          <animate
            attributeName="cx"
            values="160;155;160"
            dur="10s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="160;157;160"
            dur="9s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="3;4;3"
            dur="7s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="100" cy="40" r="2.5" fill="white" opacity="0.6">
          <animate
            attributeName="cx"
            values="100;110;100"
            dur="11s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="40;45;40"
            dur="12s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="2.5;3.5;2.5"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="160" cy="100" r="3.5" fill="white" opacity="0.7">
          <animate
            attributeName="cx"
            values="160;155;160"
            dur="13s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="100;110;100"
            dur="14s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="3.5;2.5;3.5"
            dur="9s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="100" cy="160" r="2" fill="white" opacity="0.8">
          <animate
            attributeName="cx"
            values="100;105;100"
            dur="15s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="160;155;160"
            dur="16s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="2;3;2"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="40" cy="100" r="3" fill="white" opacity="0.5">
          <animate
            attributeName="cx"
            values="40;35;40"
            dur="17s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="100;90;100"
            dur="18s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="3;4;3"
            dur="11s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      <g transform="translate(30, 100)">
        <text
          x="0"
          y="0"
          font-family="monospace"
          font-size="8"
          fill="white"
          opacity="0.9"
        ></text>
        <text
          x="0"
          y="15"
          font-family="monospace"
          font-size="8"
          fill="white"
          opacity="0.8"
        ></text>
        <text
          x="0"
          y="30"
          font-family="monospace"
          font-size="8"
          fill="white"
          opacity="0.7"
        ></text>
      </g>
    </g>
  </svg>
)
