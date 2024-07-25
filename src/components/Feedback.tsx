import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const publicKey = import.meta.env.VITE_API_PUBLIC_KEY as string
const serviceKey = import.meta.env.VITE_API_SERVICE_ID as string
const templateKey = import.meta.env.VITE_API_TEMPLATE_ID as string

const formSchema = z.object({
	name: z.string().min(3, {
		message: 'Name is required.'
	}),
	email: z.string().email({
		message: 'Invalid email address.'
	}),
	additionalInfo: z.string().optional()
})

type FormValues = z.infer<typeof formSchema>

export function FeedbackForm() {
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			additionalInfo: ''
		}
	})

	const onSubmit = (data: FormValues) => {
		emailjs.send(serviceKey, templateKey, data, publicKey).then(
			(result: unknown) => {
				console.log('SUCCESS!', result)
			},
			(error: { text: unknown }) => {
				console.log('FAILED...', error.text)
			}
		)
		form.reset()
	}

	return (
		<div className='py-10'>
			<div className='text-3xl text-text'>Feedback Form</div>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='flex flex-col gap-4 py-4'
				>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-text'>Full name</FormLabel>
								<FormControl>
									<Input
										className='text-text'
										placeholder='Enter your full name'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-text'>Email</FormLabel>
								<FormControl>
									<Input
										placeholder='Enter your email'
										type='email'
										className='text-text'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='additionalInfo'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-text'>
									Additional Information (optional)
								</FormLabel>
								<FormControl>
									<Textarea
										className='text-text'
										placeholder='Enter additional information'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button variant='secondary' type='submit'>
						Submit
					</Button>
				</form>
			</Form>
		</div>
	)
}
