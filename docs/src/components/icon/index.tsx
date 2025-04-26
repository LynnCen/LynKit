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

export const HeroSVG = () => {
  // Helper function to generate random values for animations
  const rnd = (min: number, max: number) => Math.random() * (max - min) + min

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 416.9 432.6"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      width="454"
      height="458"
      className="dark:bg-transparent bg-transparent lg:ml-[-90px] overflow-visible" // Modified for transparent background in both themes
    >
      <defs>
        {/* Main Gradient */}
        <radialGradient
          id="heroGradientFill"
          cx="0"
          cy="0"
          r="1"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(108.907 19.5585 11.0822 -61.7086 277.796427 134.645495)"
        >
          <stop offset="46%" stopColor="rgba(14,22,61,0)"></stop>
          <stop offset="100%" stopColor="rgba(9,17,57,0)"></stop> {/* Made fully transparent */}
        </radialGradient>

        {/* New Gradients for Effects */}
        <linearGradient id="particleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fcff83" />
          <stop offset="100%" stopColor="#ffd6d6" />
        </linearGradient>
        
        {/* Holographic gradients */}
        <linearGradient id="holoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(161, 245, 255, 0.6)" />
          <stop offset="50%" stopColor="rgba(220, 151, 255, 0.6)" />
          <stop offset="100%" stopColor="rgba(136, 235, 255, 0.6)" />
        </linearGradient>

        {/* Energy field gradient */}
        <radialGradient id="energyField" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="rgba(125, 211, 252, 0.5)" />
          <stop offset="85%" stopColor="rgba(125, 211, 252, 0)" />
        </radialGradient>

        {/* Glow Filter for Stars/Particles */}
        <filter id="glowEffect" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        {/* Holographic scan line effect */}
        <pattern id="scanlines" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(170, 230, 255, 0.2)" strokeWidth="1">
            <animate attributeName="y1" values="0; 4; 0" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.1; 0.3; 0.1" dur="4s" repeatCount="indefinite"/>
          </line>
        </pattern>
      </defs>

      {/* Background - fully transparent */}
      <rect width="100%" height="100%" fill="transparent" />

      {/* Multilayer structure to ensure correct z-index */}
      <g id="backgroundElements">
        {/* Subtle Energy Ring (behind character) */}
        <circle cx="208" cy="216" r="140" fill="url(#energyField)" opacity="0.3">
          <animate attributeName="opacity" values="0.3; 0.15; 0.3" dur="6s" repeatCount="indefinite" />
          <animate attributeName="r" values="140; 145; 140" dur="10s" repeatCount="indefinite" />
        </circle>
        
        {/* Expanding Pulses (behind character) */}
        {Array.from({ length: 3 }).map((_, i) => {
          const duration = 5 + i;
          const delay = i * 1.5;
          
          return (
            <circle 
              key={`pulse-${i}`}
              cx="208" 
              cy="216" 
              r="0" 
              fill="none"
              stroke="rgba(125, 211, 252, 0.15)"
              strokeWidth="2"
            >
              <animate
                attributeName="r"
                values="0; 120"
                dur={`${duration}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                values="0.15; 0"
                dur={`${duration}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
        
        {/* Background Particles (behind character) */}
        {Array.from({ length: 15 }).map((_, i) => {
          const size = rnd(0.7, 2.5);
          const duration = rnd(5, 12);
          const centerX = 208;
          const centerY = 216;
          const radius = rnd(120, 170); // Keep particles in outer ring 
          const angle = rnd(0, 360);
          
          // Calculate position on circle
          const x = centerX + radius * Math.cos(angle * Math.PI / 180);
          const y = centerY + radius * Math.sin(angle * Math.PI / 180);
          
          return (
            <circle
              key={`bg-particle-${i}`}
              cx={x}
              cy={y}
              r={size}
              fill="#a5faff"
              opacity={rnd(0.15, 0.4)}
            >
              <animate
                attributeName="opacity"
                values={`${rnd(0.15, 0.4)}; ${rnd(0.05, 0.2)}; ${rnd(0.15, 0.4)}`}
                dur={`${duration}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values={`${size}; ${size * 1.3}; ${size}`}
                dur={`${rnd(3, 6)}s`}
                repeatCount="indefinite"
              />
              
              {/* Subtle orbital movement */}
              <animateMotion
                dur={`${rnd(15, 25)}s`}
                repeatCount="indefinite"
                path={`M 0 0 a ${rnd(3, 8)} ${rnd(3, 8)} 0 1 0 1 0 a ${rnd(3, 8)} ${rnd(3, 8)} 0 1 0 -1 0`}
              />
            </circle>
          );
        })}
      </g>

      {/* Main Character Group */}
      <g id="heroCharacterGroup" transform="matrix(0.999521 -0.030935 0.030935 0.999521 -17.094758 -19.867234)">
         {/* Gentle Floating Animation for the whole character */}
         <animateTransform
           attributeName="transform"
           attributeType="XML"
           type="translate"
           values="0 0; 0 -5; 0 0"
           dur="8s"
           repeatCount="indefinite"
           additive="sum" // Add to existing transform
         />
         <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            values="0 208 216; 1 208 216; -1 208 216; 0 208 216" // Rotate slightly around center
            dur="12s"
            repeatCount="indefinite"
            additive="sum"
          />

        {/* Lower Body/Legs group */}
        <g id="lowerBody" transform="translate(1.916938 -5.474816)">
           {/* Subtle animation for lower parts */}
           <animateTransform
             attributeName="transform"
             type="translate"
             values="0 0; 1 -1; 0 0"
             dur="6s"
             begin="0.5s"
             repeatCount="indefinite"
             additive="sum"
           />
          <path
            id="leftLeg"
            d="M 184.7 366.9 C 184.7 366.9 211.5 354.5 211.5 363.8 C 211.5 363.8 221.1 351.9 211.1 372.4 L 202.3309323151528 387.96458127851974 L 176.73774991322915 419.4998336945233 L 183.9 366.8"
            fill="#ffd6d6"
            stroke="#091139"
            strokeMiterlimit="10"
            transform="matrix(1.094764 0 0 1.094764 -19.030422 -34.166758)"
          >
             {/* Individual leg animation */}
             <animateTransform
               attributeName="transform"
               type="rotate"
               values="0 190 390; 2 190 390; 0 190 390; -1 190 390; 0 190 390" // Pivot point guess
               dur="7s"
               repeatCount="indefinite"
               additive="sum"
             />
          </path>
          <path
            id="rightLeg"
            d="M 238.40506425711413 327.5961458780748 C 238.40506425711413 327.5961458780748 219.7 377.7 198.8 406.3 C 198.8 406.3 194.34525644672533 382.89428525549744 194.94525644672532 371.79428525549747 L 176.1 387.5 C 176.1 387.5 179.88451049516053 347.4700854481032 184.2845104951605 333.67008544810324 C 188.7845104951605 319.8700854481032 205 311.5 205 311.5 C 205 311.5 245.78576239140696 294.4277512089511 239.08576239140697 319.4277512089511 L 238.40506425711413 327.5961458780748 Z"
            fill="#66d0de"
            stroke="#000"
            strokeMiterlimit="10"
            transform="matrix(0.905236 0 0 0.905236 15.782419 40.227946)"
           >
              {/* Individual leg animation */}
             <animateTransform
               attributeName="transform"
               type="rotate"
               values="0 220 360; -2 220 360; 0 220 360; 1 220 360; 0 220 360" // Pivot point guess
               dur="7.5s"
               begin="-0.3s"
               repeatCount="indefinite"
               additive="sum"
             />
           </path>
          <path
            id="lowerTorso"
            d="M 244.9 317.5 C 244.9 317.5 245.78718927737685 339.69026580310435 234.88718927737685 356.19026580310435 L 226.5812534418187 336.649096094054 L 205.88433022249262 364.8145794858268 L 200.28355454397342 334.73744931701134 L 173.17238134442957 350.237728577535 C 173.17238134442957 350.237728577535 182.1 314.1 193 297.7 C 192.9 297.7 240.8 306.1 244.9 317.5 L 244.9 317.5 L 244.9 317.5 Z"
            fill="#ffd6d6"
            stroke="#091139"
            strokeMiterlimit="10"
            transform="matrix(1.094764 0 0 1.094764 -22.19407 -25.816491)"
          ></path>
        </g>

        {/* Upper Body / Head group */}
        <g id="upperBody">
           {/* Head Bobble Animation */}
           <animateTransform
             attributeName="transform"
             type="translate"
             values="0 0; 0 -2; 0 0"
             dur="5s"
             repeatCount="indefinite"
             additive="sum"
           />
           <animateTransform
             attributeName="transform"
             type="rotate"
             values="0 284 140; 1.5 284 140; -1.5 284 140; 0 284 140" // Rotate head slightly
             dur="9s"
             repeatCount="indefinite"
             additive="sum"
           />

          <path
            id="armOrBodyPart1"
            d="M205.2,255c-2.6,7.4-8,11.3-15.8,12.1s-16.3,15.2-12.2,24.2c4.2,9.5,15.6,16.5,45.9,26.1c30.3,9.7,38.4,2.9,43.3-8.1s-4.6-19.7-4.6-19.7-6-6.3-3.8-16.3"
            fill="#66d0de"
          ></path>
          <path
            id="armOrBodyPart1_stroke"
            d="M205.2,255c-2.6,7.4-8,11.3-15.8,12.1s-16.3,15.2-12.2,24.2c4.2,9.5,15.6,16.5,45.9,26.1c30.3,9.7,38.4,2.9,43.3-8.1s-4.6-19.7-4.6-19.7-6-6.3-3.8-16.3"
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
          ></path>
          <path
            id="mainBodyShape"
            d="M401.9,272.2c-9.2,27-86.1,25.2-171.8-4.1s-147.8-74.9-138.6-101.9l9.6-27.6l310,105.2-9.2,28.4Z"
            fill="#66d0de"
            stroke="#000"
            strokeMiterlimit="10"
          ></path>
          <path
             id="bodyAccent"
            d="M100.8,138.1c-9.2,27,52.9,72.6,138.6,101.9s162.6,31.1,171.8,4.1-53-74.7-138.7-104-162.5-29-171.7-2Z"
            fill="#ffd6d6"
            stroke="#091139"
            strokeWidth="1.0744"
            strokeMiterlimit="10"
          ></path>
          <path
            id="line1"
            d="M320.3,189.5l54.8,73.1"
            fill="none"
            stroke="#091139"
            strokeWidth="1.0395"
            strokeMiterlimit="10"
          ></path>
          <path
            id="line2"
            d="M262.9,184l-9,61"
            fill="none"
            stroke="#091139"
            strokeWidth="1.0395"
            strokeMiterlimit="10"
          ></path>
          <path
            id="line3"
            d="M210.7,153.5l-87.6,25.9"
            fill="none"
            stroke="#091139"
            strokeWidth="1.0308"
            strokeMiterlimit="10"
          ></path>

          {/* Head Area */}
          <g id="headGroup">
            <path
              id="headShape"
              d="M180.6,134.4c11.8-37,58.4-55.2,104-40.5c45.7,14.6,73.2,56.5,61.4,93.6c0,0-14.3,20.6-85.7-1.7-70.4-22-79.7-51.4-79.7-51.4v0Z"
              fill="#17204e"
              stroke="#ffd6d6"
              strokeWidth="1.0744"
              strokeMiterlimit="10"
            ></path>
            {/* Path duplicated for potential separate fill/stroke animation - removing duplicates for clarity */}
            {/* <path d="M180.6,134.4c11.8-37,58.4-55.2,104-40.5c45.7,14.6,73.2,56.5,61.4,93.6c0,0-14.3,20.6-85.7-1.7-70.4-22-79.7-51.4-79.7-51.4v0Z" fill="#17204e" stroke="#ffd6d6" strokeWidth="1.0744" strokeMiterlimit="10"></path> */}
            {/* <path d="M180.6,134.4c11.8-37,58.4-55.2,104-40.5c45.7,14.6,73.2,56.5,61.4,93.6c0,0-14.3,20.6-85.7-1.7-70.4-22-79.7-51.4-79.7-51.4v0Z" fill="none" stroke="#ffd6d6" strokeWidth="1.0744" strokeMiterlimit="10"></path> */}

            {/* Masked Elements Group 1 (Eyes/Face?) */}
            <g id="faceElements1" mask="url(#heroMask1)">
               {/* Animation for this group */}
               <animateTransform
                 attributeName="transform"
                 type="translate"
                 values="0 0; 0 1; 0 0; 0 -1; 0 0"
                 dur="4s"
                 repeatCount="indefinite"
                 additive="sum"
               />
              <g transform="matrix(0.997951 -0.06399 0.06399 0.997951 -12.622503 14.634743)">
                <path
                  d="M208.5,162.3c-3.7-13.3,7.3-42.7,34.9-36.2c0,0,12.3,3.8,15.2,19.4s-7.3,30.7-19.1,32.7c0,0-22.2-7.4-31-15.9Z"
                  fill="#fcff83"
                ></path>
                {/* ... other paths in this group ... */}
                 <path
                    d="M 258.8 150.8 C 258.8 150.8 279.991924156 154.824224756 273.791924156 174.024224756"
                    fill="none" stroke="#fcff83" strokeWidth="1.7733" strokeLinecap="round" strokeMiterlimit="10"
                 ></path>
                 <path
                    d="M 212.4 140.7 C 212.4 140.7 197.845865882 136.258736198 192.645865882 148.058736198"
                    fill="none" stroke="#fcff83" strokeWidth="1.7733" strokeLinecap="round" strokeMiterlimit="10"
                 ></path>
                 <path
                    d="M 209.8 147.2 C 209.8 147.2 201.963961372 144.333870602 197.563961372 153.533870602"
                    fill="none" stroke="#fcff83" strokeWidth="1.7733" strokeLinecap="round" strokeMiterlimit="10"
                 ></path>
                 <path
                    d="M 222.6 129.4 C 222.6 129.4 208.14080213399998 121.632394244 194.340802134 135.232394244 C 190.64080213399998 138.932394244 189.45708133 142.165925396 187.65708133 145.665925396"
                    fill="none" stroke="#fcff83" strokeWidth="1.7733" strokeLinecap="round" strokeMiterlimit="10"
                 ></path>
                 <path
                    d="M 258.3 157.2 C 258.3 157.2 279.683803862 167.57626971000002 266.642075766 183.650521148"
                    fill="none" stroke="#fcff83" strokeWidth="1.7733" strokeLinecap="round" strokeMiterlimit="10"
                 ></path>
                 <path
                    d="M 257.1 140.8 C 257.1 140.8 273.684112444 142.330405122 276.08411244399997 153.130405122"
                    fill="none" stroke="#fcff83" strokeWidth="1.7733" strokeLinecap="round" strokeMiterlimit="10"
                 ></path>
                 <path
                    d="M 249.1 172.4 C 249.1 172.4 253.896823482 177.826237464 249.328314808 182.92463172799998"
                    fill="none" stroke="#fcff83" strokeWidth="1.7733" strokeLinecap="round" strokeMiterlimit="10"
                 ></path>
                 {/* Eyes */}
                 <g id="eyes">
                   <path
                     id="rightEye"
                     d="M238.3,150.4c1.4-4.5,4.7-7.5,7.5-6.7s3.9,5.2,2.6,9.7c-1.4,4.5-4.7,7.5-7.5,6.7s-4-5.1-2.6-9.7Z"
                     fill="#fff" stroke="#17204e" strokeWidth="1.1793" strokeLinecap="round" strokeMiterlimit="10"
                   >
                     {/* Blink animation */}
                      <animate attributeName="ry" values="4.85; 0.5; 4.85" dur="0.2s" begin="0s; blinkRight.end+${rnd(3,8)}s" repeatCount="1" id="blinkRight" />
                      <animate attributeName="cy" values="155.75; 157; 155.75" dur="0.2s" begin="0s; blinkRight.end+${rnd(3,8)}s" repeatCount="1" />

                   </path>
                   <path
                     id="leftEye"
                     d="M221.3,149.8c.3-4.7,2.9-8.4,5.8-8.2s5,4.2,4.7,8.9-2.9,8.4-5.8,8.2-5-4.2-4.7-8.9Z"
                     fill="#fff" stroke="#17204e" strokeWidth="1.1793" strokeLinecap="round" strokeMiterlimit="10"
                   >
                      {/* Blink animation - slightly offset */}
                      <animate attributeName="ry" values="4.45; 0.5; 4.45" dur="0.2s" begin="0.1s; blinkLeft.end+${rnd(3,8)}s" repeatCount="1" id="blinkLeft" />
                      <animate attributeName="cy" values="154.25; 155.5; 154.25" dur="0.2s" begin="0.1s; blinkLeft.end+${rnd(3,8)}s" repeatCount="1"/>
                    </path>
                   {/* Pupils */}
                   <path
                      id="leftPupil"
                     d="M231.5,146.7c0,0-2.2-2.4-4.4,1-2.9,5.5-1.1,11.2-.9,11.2s7-1.4,5.3-12.2Z"
                     fill="#17204e"
                   ></path>
                   <path
                     id="rightPupil"
                     d="M248.1,147.4c0,0-2.2-2.4-4.4,1-2.9,5.5-1.1,11.2-.9,11.2.3.1,7-1.4,5.3-12.2Z"
                     fill="#17204e"
                   ></path>
                   {/* Pupil movement */}
                    <animateTransform
                      xlinkHref="#leftPupil"
                      attributeName="transform"
                      type="translate"
                      values="0 0; 1 0.5; -0.5 -0.5; 0 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                     <animateTransform
                      xlinkHref="#rightPupil"
                      attributeName="transform"
                      type="translate"
                      values="0 0; 1 0.5; -0.5 -0.5; 0 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                 </g>
              </g>
              <mask id="heroMask1" mask-type="luminance" x="-150%" y="-150%" height="400%" width="400%">
                <path
                  d="M180.6,134.5c11.8-37,58.4-55.2,104.1-40.6s73.2,56.5,61.4,93.6c0,0-14.3,20.6-85.7-1.7-70.5-22-79.8-51.4-79.8-51.3v0Z"
                  fill="#fff"
                ></path>
              </mask>
            </g>

            {/* Masked Elements Group 2 (Mouth/Cheeks?) */}
            <g id="faceElements2" mask="url(#heroMask2)">
               {/* Animation for this group */}
               <animateTransform
                 attributeName="transform"
                 type="scale"
                 values="1 1; 1.02 0.98; 1 1"
                 dur="5s"
                 begin="-1s"
                 repeatCount="indefinite"
                 additive="sum"
                 transform-origin="center" // Ensure scaling happens around the center of this group
               />
              <g transform="matrix(0.998494 0.054859 -0.054859 0.998494 11.136872 -14.347602)">
                {/* ... paths in this group ... */}
                 <path d="M290.5,118.3c-1.7,1.9-3,5.3-2.4,5.5.5.1,5.2.9,7,1.1.5-1.2,1.4-4,.6-5.5-1-1.7-3.4-2.9-5.2-1.1Z" fill="#66d0de"></path>
                 <path d="M288,123.7c.2-2.9,2.9-8.1,6.5-5.5c2.6,1.8,1.6,4.6.9,6.4" fill="none" stroke="#17204e" strokeWidth="1.3103"></path>
                 <path d="M269.4,164.2c2.9-13.4-3.3-24.5,5-34.7c8.3-10.3,29.6-7.8,39.7,6c10.1,13.9,15.6,33.2,3.1,55.6-1,1.8-2,3.5-3.1,4.9-11.8-.3-27.8-2.6-49.1-8.9-1.8-7,2.4-13.4,4.4-22.9v0Z" fill="#66d0de" stroke="#17204e" strokeWidth="0.8735" strokeMiterlimit="10"></path>
                 <path d="M 267.3 129.4 C 270.3 123.9 277.2 122 282.7 125 C 288.2 128 290.2 134.9 287.2 140.4 C 284.2 145.9 277.3 147.8 271.8 144.8 C 266.3 141.8 264.3 134.9 267.3 129.4 Z" transform="matrix(.998984-.045068 0.045068 0.998984-5.797929 12.632087)" fill="#fff" stroke="#17204e" strokeWidth="1.3452" strokeLinecap="round" strokeMiterlimit="10"></path>
                 <path d="M316.4,130.2c-.8,3.2-3.7,6.8-4.3,6.3-.5-.4-4.5-4.9-5.9-6.7c1-1.4,3.4-4.2,5.5-4.3c2.5-.2,5.5,1.5,4.7,4.7v0Z" fill="#66d0de"></path>
                 <path d="M 293.5 144.4 C 296.7 138.5 304.2 136.4 310.1 139.7 C 316 143 318.2 150.4 314.9 156.2 C 311.7 162.1 304.2 164.2 298.3 160.9 C 292.4 157.6 290.2 150.2 293.5 144.4 Z" transform="matrix(.977221 0.212225-.212225 0.977221 38.916428-61.139195)" fill="#fff" stroke="#17204e" strokeWidth="1.3452" strokeLinecap="round" strokeMiterlimit="10"></path>
                 <path d="M 297.9 153 C 298.6 151.9 300 151.5 301.1 152.2 C 302.2 152.9 302.6 154.3 301.9 155.4 C 301.2 156.5 299.8 156.9 298.7 156.2 C 297.7 155.5 297.3 154.1 297.9 153 Z" fill="#17204e" opacity="1"></path>
                 <path d="M 270.8 136.8 C 271.5 135.7 272.9 135.3 274 136 C 275.1 136.7 275.5 138.1 274.8 139.2 C 274.1 140.3 272.7 140.7 271.6 140 C 270.5 139.3 270.1 137.9 270.8 136.8 Z" fill="#17204e" opacity="1"></path>
                 <path d="M315.3,178.5c-8.3,3.6-9-.1-7.4-1.5s6.5-3.3,6.5-3.3" fill="#66d0de"></path>
                 <path d="M315.3,178.5c-8.3,3.6-9-.1-7.4-1.5s6.5-3.3,6.5-3.3" fill="none" stroke="#17204e" strokeWidth="1.3452" strokeMiterlimit="10"></path>
                 <path d="M281,156.7l.1.1c.2.1.5.1.8.1.3-.1.5-.3.7-.6l1.9-3.6c.3-.5.1-1.2-.4-1.5l-1.4-.8c-.5-.3-1.1-.1-1.4.4-.6,1.1-2,3.9-.4,5.7l.1.2v0v0Z" fill="#fff"></path>
                 <path d="M282.4,157.6l.2.1h.1c2.3.3,3.9-2.3,4.5-3.5.3-.5.1-1.2-.4-1.5l-1.4-.7c-.5-.3-1.1,0-1.4.5l-2,3.5c-.2.6-.1,1.3.4,1.6v0Z" fill="#fff"></path>
                 <path d="M286.5,153.4l-1.4-.7c-.2-.1-.3,0-.4.2l-2,3.5c-.1.2-.1.4.1.5c0,0,.1,0,.1,0c1.9.3,3.3-2.2,3.8-3.1c0-.1,0-.3-.2-.4m.7-1.3c.9.5,1.2,1.5.7,2.4-1.4,2.7-3.3,4.1-5.3,3.9-.2,0-.4-.1-.6-.2-.9-.5-1.2-1.6-.7-2.5l2-3.5c.5-.9,1.5-1.2,2.4-.8l1.5.7v0v0Z" fill="#17204e"></path>
                 <path d="M289.1,154.8c-1.1.8-4.6-.5-6.2-1.9s-3.8-3.8-1.3-4.9c2.5-1,4.8.4,4.8.4c3.6,1.8,3.7,5.6,2.7,6.4v0Z" fill="#17204e"></path>
                 <path d="M312.3,136.6c2.9-2.2,6.7-8.6,1.5-10.7-3.7-1.5-6,1.4-7.4,3.4" fill="none" stroke="#17204e" strokeWidth="1.3103"></path>
                 <path d="M282.4,151.1c-.1-.1-.4,0-.5.2-.5.9-1.8,3.4-.5,4.8h.1c.1.1.4,0,.5-.2l1.9-3.6c.1-.2.1-.4-.1-.5l-1.4-.7m.7-1.3v0l1.4.8c.8.5,1.1,1.6.6,2.4l-1.9,3.6c-.2.5-.6.8-1.1.9s-.9.1-1.3-.1c-.2-.1-.3-.2-.5-.4-1.3-1.5-1.2-3.9.4-6.5.5-.9,1.6-1.2,2.4-.7v0Z" fill="#17204e"></path>
              </g>
              <mask id="heroMask2" mask-type="luminance" x="-150%" y="-150%" height="400%" width="400%">
                <path
                  d="M180.6,134.5c11.8-37,58.4-55.2,104.1-40.6s73.2,56.5,61.4,93.6c0,0-14.3,20.6-85.7-1.7-70.5-22-79.8-51.4-79.8-51.3v0Z"
                  fill="#fff"
                ></path>
              </mask>
            </g>
          </g> { /* End headGroup */ }
        </g> { /* End upperBody */ }

        {/* Background fill for the mask area - might not be needed if masks work correctly */}
        {/* <g>
          <path
            d="M180.6,134.5c11.8-37,58.4-55.2,104.1-40.6s73.2,56.5,61.4,93.6c0,0-14.3,20.6-85.7-1.7-70.5-22-79.8-51.4-79.8-51.3v0Z"
            fill="url(#heroGradientFill)"
          ></path>
        </g> */}
      </g> { /* End heroCharacterGroup */ }

      {/* Particle Effects Layer */}
      <g id="particles" filter="url(#glowEffect)">
        {Array.from({ length: 30 }).map((_, i) => (
          <circle
            key={`particle-${i}`}
            fill="url(#particleGradient)"
            r={rnd(1, 3.5)} // Random size
          >
            {/* Random starting position */}
            <animate
              attributeName="cx"
              values={`${rnd(50, 350)}; ${rnd(50, 350)}; ${rnd(50, 350)}`}
              dur={`${rnd(10, 20)}s`}
              begin={`-${rnd(0, 15)}s`} // Random start delay
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values={`${rnd(50, 400)}; ${rnd(50, 400)}; ${rnd(50, 400)}`}
              dur={`${rnd(10, 20)}s`}
              begin={`-${rnd(0, 15)}s`} // Random start delay
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0; ${rnd(0.3, 0.8)}; 0" // Fade in and out
              dur={`${rnd(8, 15)}s`}
              begin={`-${rnd(0, 15)}s`}
              repeatCount="indefinite"
            />
             <animate
              attributeName="r"
              values="${rnd(1, 3)}; ${rnd(1.5, 4)}; ${rnd(1, 3)}" // Pulsate size
              dur={`${rnd(5, 10)}s`}
              begin={`-${rnd(0, 10)}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>

    </svg>
  );
};

// ... existing code ...
