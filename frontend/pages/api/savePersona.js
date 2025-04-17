import { supabase } from '../../lib/supabaseClient'

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    console.log('Request body:', req.body) // Debug log
    
    const { name, color, description } = req.body

    // Validate input
    if (!name?.trim() || !color?.trim() || !description?.trim()) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['name', 'color', 'description']
      })
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('personas')
      .insert([{
        name: name.trim(),
        color: color.trim(),
        description: description.trim()
      }])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return res.status(500).json({
        error: 'Database operation failed',
        details: error.message
      })
    }

    console.log('Saved to Supabase:', data) // Debug log
    return res.status(201).json({
      success: true,
      data: data[0],
      message: 'Persona saved successfully'
    })

  } catch (error) {
    console.error('Server error:', error)
    return res.status(500).json({
      error: 'Internal server error',
      details: error.message
    })
  }
}