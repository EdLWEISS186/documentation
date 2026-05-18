# Advanced CGNAT Dual-Node Setup

Detailed guide for running stable DAC nodes behind CGNAT using Dual-Node Single Machine architecture.

---

## Network Topology

    Internet
       └── Router (CGNAT)
             └── Single Physical Machine
                   ├── Windows (Node 1 - Primary)
                   └── WSL2 Ubuntu (Node 2 - Secondary)

---

## Why This Setup Excels

- Bypasses many CGNAT restrictions through internal peering
- Maximizes limited hardware resources
- Provides redundancy within a single machine
- Proven stable during Testnet Inception

---

## Key Configurations

### 1. Static Peering

- Configure both nodes to connect internally
- Add reliable external peers

### 2. Sync Strategy

- Use `fast` syncmode for faster initial synchronization

### 3. Monitoring & Automation

- DAC Node Dashboard integration
- Auto-restart scripts (Windows + WSL)

---

## Troubleshooting

### Common Issues & Solutions

| Issue | Possible Cause | Solution |
|---|---|---|
| Poor peering / Low peers | CGNAT restriction | Use static peering + internal node connection |
| Frequent disconnects | Resource contention / WSL issues | Limit CPU/RAM usage, use auto-restart scripts |
| Slow sync | Storage speed / Network | Use NVMe SSD + `fast` syncmode |
| High CPU usage | Both nodes running simultaneously | Adjust CPU allocation between Windows & WSL2 |
| Dashboard not showing data | Port / API issue | Check firewall and correct endpoint |

---

## Best Practices

- Maintain uptime above 95%
- Monitor resource usage regularly (CPU, RAM, Disk I/O)
- Implement auto-restart mechanism on both OS
- Use internal IP for peering between Node 1 and Node 2
- Keep both nodes on `fast` syncmode
- Regularly update node software
- Backup important configuration files

---

## Maximizing Quantum Energy (QE)

- Consistent uptime
- Good peer quality and block propagation speed
- Stable network connectivity
- Proper resource allocation

---

## References

- DAC Dual Node CGNAT Setup Repository

