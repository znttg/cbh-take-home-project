const crypto = require('crypto')

function dataToJSON(data) {
  return JSON.stringify(data)
}

function generatePartitionKeyFromData(data) {
  return crypto.createHash('sha3-512').update(data).digest('hex')
}

function retrieveCandidateFromExistingEvent(event) {
  if (!event) return

  if (event.partitionKey) return event.partitionKey

  const eventJson = dataToJSON(event)
  return generatePartitionKeyFromData(eventJson)
}

function validateCandidate(candidate) {
  const TRIVIAL_PARTITION_KEY = '0'
  if (!candidate) return TRIVIAL_PARTITION_KEY

  return candidate
}

function parseToJsonIfNotString(candidate) {
  if (typeof candidate !== 'string') return dataToJSON(candidate)

  return candidate
}

function validateLengthAndGenerateKey(candidate) {
  const MAX_PARTITION_KEY_LENGTH = 256

  if (candidate && candidate.length > MAX_PARTITION_KEY_LENGTH)
    return generatePartitionKeyFromData(candidate)
    
  return candidate
}

exports.deterministicPartitionKey = event => {
  
  let candidate = retrieveCandidateFromExistingEvent(event)
  candidate = validateCandidate(candidate)
  candidate = parseToJsonIfNotString(candidate)
  candidate = validateLengthAndGenerateKey(candidate)

  return candidate
}
