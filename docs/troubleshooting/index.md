# Troubleshooting

Common issues and solutions for DClaw Test.

## Quick Diagnostics

```bash
# Check app pods
kubectl get pods -n dclaw-test

# Check logs
kubectl logs -n dclaw-test deployment/dclaw-test-backend

# Check database
kubectl get clusters -n dclaw-test
```

## Sections

- [Common Issues](./common-issues)
- [FAQ](./faq)
