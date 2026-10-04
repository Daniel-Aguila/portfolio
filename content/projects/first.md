---
title: LED Matrix Clock
description: A 16x16 LED matrix that shows the time and weather, driven by an ESP32.
date: "2026-05-10"
category: electrical
thumbnail_url: /projects/led-matrix/cover.jpg
youtubeId: abc123XYZ
photos:
  - /projects/led-matrix/front.jpg
  - /projects/led-matrix/wiring.jpg
tags:
  - esp32
  - pcb
---

I wanted a clock I could read from across the room.

## How it works

The ESP32 pulls the time over WiFi and refreshes the display every second.

## Parts

- ESP32 dev board
- 16x16 WS2812B matrix
- 5V 4A power supply