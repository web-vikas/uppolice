"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traceCrime = traceCrime;
function traceCrime(value) {
    const caseId = Math.random().toString(36).slice(2, 11);
    const timestamp = new Date().toISOString();
    console.log(`
  🚨 ${'='.repeat(30)} CRIME ALERT ${'='.repeat(30)}
  |
  |  💥 Value: ${JSON.stringify(value)}
  |  
  |  📋 Case File:
  |  - ID: ${caseId}
  |  - Timestamp: ${timestamp}
  |  - Severity: ${'🔥'.repeat(Math.ceil(Math.random() * 3))}
  |
  👮 ${'='.repeat(30)} END OF REPORT ${'='.repeat(31)}
  `);
}
