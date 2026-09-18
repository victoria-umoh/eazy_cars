<?php

namespace App\Models;

use Database\Factories\VehicleFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    /** @use HasFactory<VehicleFactory> */
    use HasFactory, HasUuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'brand',
        'model',
        'name',
        'tag',
        'year_range',
        'transmission',
        'fuel',
        'price',
        'status',
        'image_class',
        'image_url',
        'description',
        'is_featured',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var list<string>
     */
    protected $appends = [
        'yearRange',
        'imageUrl',
        'imageClass',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'is_featured' => 'boolean',
        ];
    }

    /**
     * CamelCase alias for year_range to support React components.
     */
    public function getYearRangeAttribute(): ?string
    {
        return $this->attributes['year_range'] ?? null;
    }

    /**
     * CamelCase alias for image_url to support React components.
     */
    public function getImageUrlAttribute(): ?string
    {
        return $this->attributes['image_url'] ?? null;
    }

    /**
     * CamelCase alias for image_class to support React components.
     */
    public function getImageClassAttribute(): ?string
    {
        return $this->attributes['image_class'] ?? null;
    }
}
