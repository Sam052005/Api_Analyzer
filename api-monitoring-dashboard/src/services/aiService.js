export const analyzeResponseTimes = (data) => {
    // Simple anomaly detection using IQR method
    const values = data.map(item => item.value)
    const sorted = [...values].sort((a, b) => a - b)
    const q1 = sorted[Math.floor(sorted.length * 0.25)]
    const q3 = sorted[Math.floor(sorted.length * 0.75)]
    const iqr = q3 - q1
    const threshold = q3 + (1.5 * iqr)
  
    return data.map(item => ({
      ...item,
      isAnomaly: item.value > threshold
    }))
  }
  
  export const detectTrafficPatterns = (timelineData) => {
    // Simple pattern detection
    const hourlyAvg = Array(24).fill(0)
    const counts = Array(24).fill(0)
  
    timelineData.forEach(item => {
      const hour = new Date(item.timestamp).getHours()
      hourlyAvg[hour] += item.value
      counts[hour]++
    })
  
    const normalized = hourlyAvg.map((total, i) => 
      counts[i] > 0 ? Math.round(total / counts[i]) : 0
    )
  
    return {
      baseline: normalized,
      current: timelineData.slice(-24).map(item => item.value),
      deviation: calculateDeviation(normalized, timelineData.slice(-24))
    }
  }
  
  const calculateDeviation = (baseline, current) => {
    return current.map((val, i) => {
      const base = baseline[i] || 1
      return ((val - base) / base) * 100
    })
  }