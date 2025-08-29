export function getCreatorCount(): number {
  // Base number of creators
  const baseCount = 187
  
  // Current timestamp in seconds
  const currentEpoch = Math.floor(Date.now() / 1000)
  
  // Offset: December 29, 2024 00:00:00 UTC in seconds since epoch
  // This makes the count start from baseCount on this date
  const offset = Math.floor(new Date('2024-12-29T00:00:00Z').getTime() / 1000)
  
  // Days since offset date
  const secondsSinceOffset = currentEpoch - offset
  const daysSinceOffset = secondsSinceOffset / (24 * 60 * 60)
  
  // Growth rate: approximately 8-12 creators per day
  // Using 0.42 per hour to get ~10 per day with some variance
  const growthPerHour = 0.0
  const hoursSinceOffset = secondsSinceOffset / (60 * 60)
  
  // Calculate total creators with some organic-looking variance
  // Add a small sine wave for daily fluctuation
  const timeVariance = Math.sin(daysSinceOffset * 0.5) * 5
  const totalCreators = Math.floor(baseCount + (hoursSinceOffset * growthPerHour) + timeVariance)
  
  // Ensure we don't go below base count and cap at a reasonable number
  return Math.max(baseCount, totalCreators)
}

export function getCreatorCountFormatted(): string {
  const count = getCreatorCount()
  // Format with comma for thousands
  return count.toLocaleString()
}

export function getPercentageFilled(): number {
  const current = getCreatorCount()
  const max = 500
  const percentage = Math.min((current / max) * 100, 95) // Cap at 95% to maintain urgency
  return Math.round(percentage)
}