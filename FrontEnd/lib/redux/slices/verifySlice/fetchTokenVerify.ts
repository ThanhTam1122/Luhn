export const fetchTokenVerify = async (
    token: string
  ): Promise<{ data: string }> => {
    const response = await fetch('http://localhost:8082/api/verify-token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Allow-Access-Control-Origin': '*'
      },
      body: token
    })
    
    const result = await response.text()
    
    return { data: result }
  }
  