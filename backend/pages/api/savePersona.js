import { supabase } from '../../lib/supabaseClient'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    console.log('Received request body:', req.body) // Debug log

    const { name, color, description } = req.body

    // Validate required fields
    if (!name || !color || !description) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['name', 'color', 'description']
      })
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('personas')
      .insert([{ name, color, description }])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return res.status(500).json({
        error: 'Database error',
        details: error.message
      })
    }

    return res.status(201).json({
      success: true,
      data: data[0]
    })

  } catch (error) {
    console.error('Server error:', error)
    return res.status(500).json({
      error: 'Internal server error',
      details: error.message
    })
  }
}