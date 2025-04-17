export const savePersona = async (personaData) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/savePersona`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(personaData)
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save persona');
      }
  
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  };