# Running a Node

Guide for running DAC Quantum Chain nodes on Testnet Inception.

## Overview

This guide covers recommended setups for DAC node operators, with a focus on the **Dual-Node Single Machine** configuration. This setup is particularly effective for users operating behind CGNAT or with limited hardware resources.

## Hardware Requirements

**Minimum**
- CPU: 4 cores
- RAM: 8 GB
- Storage: 500 GB NVMe SSD
- Internet: 50 Mbps (symmetric)

**Recommended**
- CPU: 8+ cores
- RAM: 16–32 GB
- Storage: 1 TB NVMe SSD

## Recommended Configuration

### Dual-Node Single Machine (Windows + WSL2)

This is currently one of the most stable and efficient setups for maximizing participation and Quantum Energy.

**Architecture:**
- One node running on **Windows** (primary / anchor)
- Second node running on **WSL2 (Ubuntu)** (secondary)

**Benefits:**
- Better resource utilization
- Internal peering between nodes
- Improved redundancy
- Higher stability under CGNAT

## Key Features Covered

- CGNAT Workaround using Static Peering
- Network topology and configuration
- Fast syncmode strategy
- Monitoring & auto-restart scripts
- Dashboard integration

## Next Sections

- [Advanced CGNAT & Dual Node Setup](./advanced-cgnat-dual-node.md)
- Installation Steps
- Troubleshooting
- Maximizing Quantum Energy

