export const fetchTokenGenerator = async (
    pads: number[]
  ): Promise<{ data: string }> => {
    const response = await fetch('http://localhost:8081/api/generate-token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Allow-Access-Control-Origin': '*'
      },
      body: pads.join('')
    })
    
    const result = await response.text()
    
    return { data: result }
  }
  