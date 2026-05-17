# Advanced CGNAT Dual-Node Setup

Detailed guide for running DAC nodes behind CGNAT using Dual-Node Single Machine architecture.

## Network Topology

## Network Topology

## Network Topology

```ascii
Internet
   └── Router (CGNAT)
         └── Single Machine
               ├── Windows (Node 1)
               └── WSL2 Ubuntu (Node 2)

## Why This Setup Works Well

- Bypasses many CGNAT limitations
- Allows internal peering between Node 1 and Node 2
- Increases total resource usage
- Improves overall stability and QE potential

## Configuration Steps

### 1. Static Peering Setup

*(Silakan tambahkan detail dari repo kamu di sini nanti)*

### 2. Fast Syncmode Strategy

### 3. Auto-restart & Monitoring Scripts

### 4. Dashboard Integration

## Common CGNAT Challenges & Solutions

- Port forwarding limitations
- Peer discovery issues
- Connection drops
- Solutions applied in this setup

## Performance Tips

- Resource allocation between Windows and WSL2
- Best practices for maximizing QE
- Monitoring important metrics

## Limitations

- Single point of failure (one machine)
- Power consumption
- etc.

